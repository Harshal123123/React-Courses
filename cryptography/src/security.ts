import { Console } from "console";
import forge from "node-forge";

export function rsaGenerateKeyPair() {
  const rsaKeyPair: any = {
    publicKey: undefined,
    privateKey: undefined,
    publicXML: "",
  };
  const rsa = forge.pki.rsa;
  const keyPair = rsa.generateKeyPair({ bits: 1024, e: 0 * 1110 });

  const hexPublicKey = keyPair.publicKey.n.toString(16);
  const bytesPublicKey = forge.util.hexToBytes(hexPublicKey);
  const encodedPublicKey = forge.util.encode64(bytesPublicKey);

  rsaKeyPair.publicKey = keyPair.publicKey;
  rsaKeyPair.privateKey = keyPair.privateKey;

  rsaKeyPair.publicXML = `<RSAKeyValue><Modulus>${encodedPublicKey}</Modulus><Exponent>${"AQAB"}</Exponent></RSAKeyValue>`;

  return rsaKeyPair;
}

export function rsaDecrypt(
  privateKey: forge.pki.rsa.PrivateKey,
  cypherText: string // bonjourResponse[77]) is a cypher text.
) {
  const result = privateKey.decrypt(forge.util.decode64(cypherText));
  return base64ToArrayBuffer(result);
}

function base64ToArrayBuffer(result: string): ArrayBufferLike {
  const binaryString = result;
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Function for separating iv and key from ascii.
function saperateIvKeyFromAsciiValue(asciiValue: string) {
  const ivEndIndex = asciiValue.lastIndexOf("==");

  const iv = asciiValue.substring(0, ivEndIndex + 2); //substring start (index,length), iv including ==
  const key = asciiValue.substring(ivEndIndex + 2); //key excluding after ==.
  return {
    iv,
    key,
  };
}

// Used to convert arraybuffer values into ascii value.
function arrayBufferToAscii(aesWithArrayBuffer: ArrayBuffer): string {
  let asciiValue = "";
  const bytes = new Uint8Array(aesWithArrayBuffer);
  const length = bytes.byteLength;
  for (let i = 0; i < length; i++) {
    asciiValue += String.fromCharCode(bytes[i]);
  }

  return asciiValue;
}

// AES
export function aesEncrypt(ASEKey: ArrayBufferLike, valueWithString: string) {
  const aesSeparationWithIvKey = saperateIvKeyFromAsciiValue(
    arrayBufferToAscii(ASEKey)
  );

  const cipher = forge.cipher.createCipher(
    "AES-CBC",
    forge.util.decode64(aesSeparationWithIvKey.key)
  );
  cipher.start({ iv: forge.util.decode64(aesSeparationWithIvKey.iv) });
  cipher.update(forge.util.createBuffer(valueWithString));
  cipher.finish();
  const encrypted = cipher.output;

  return forge.util.encode64(encrypted.getBytes());
}

// cipher decyption
export function aesDecrypt(
  AESKey: ArrayBufferLike,
  responseWithCipherText: string
) {
  const aesSeparationWithIvKey = saperateIvKeyFromAsciiValue(
    arrayBufferToAscii(AESKey)
  );
  const decipher = forge.cipher.createDecipher(
    "AES-CBC",
    forge.util.decode64(aesSeparationWithIvKey.key)
  );
  decipher.start({ iv: forge.util.decode64(aesSeparationWithIvKey.iv) });
  const responsedt = forge.util.decode64(responseWithCipherText);

  decipher.update(forge.util.createBuffer(responsedt));
  decipher.finish(); //check result true/false.
  console.log("dcrypted", forge.util.encode64(decipher.output.data.toString()));
  // console.log("....", forge.util.decodeUtf8(decipher.output.data
  return decipher.output.data;
}
