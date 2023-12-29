import { aesDecrypt, aesEncrypt } from "./security";

const baseURL =
  "https://demo.jjitonline.com/biTool/jw_web/jmobile.asmx/jMobile";

export const request = async (
  payload: string,
  extra: HeadersInit,
  isHandshaking?: Function
) => {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      "access-control-method": "post",
      ...extra,
    },
    body: payload, //,body:JSON.stringify({"val1":'{"97":"29"}',"val2":""})
  });
  checkStatusCode(response);
  isHandshaking && isHandshaking(response.headers.get("Bitool"));

  const repsonseData = await response.json();
  try {
    return JSON.parse(repsonseData.d); //parsing in object
  } catch (err) {
    return "error after try";
  }
};
const checkStatusCode = (response: Response) => {
  if (response.status !== 200) {
    throw new Error("Fetch failed with code " + response.status);
  }
};

export const encryptWithDecrypt = async (
  reqBody: any,
  ASEKey: ArrayBufferLike,
  bitool: string
) => {
  const val1 = reqBody.val1;
  const val2 = reqBody.val2;

  const encrypted = {
    val1: aesEncrypt(ASEKey, JSON.stringify(val1)),
    val2: aesEncrypt(ASEKey, JSON.stringify(val2)),
  };

  const response = await request(JSON.stringify(encrypted), {
    Bitool: bitool,
    prog: "prog",
  });

  try {
    return aesDecrypt(ASEKey, response);
    // TODO => JSON PARSE.
  } catch (err) {
    throw new Error(`Session Expired ${response[98]}`);
  }
};
