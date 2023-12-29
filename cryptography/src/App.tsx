import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import forge from "node-forge";
import axios, { AxiosResponse } from "axios";
import { Circles } from "react-loader-spinner";
import { rsaDecrypt, rsaGenerateKeyPair } from "./security";
import { request } from "./request";
import { useDispatch, useSelector } from "react-redux";
import { setAESKey, setBitool } from "./redux/globalSlice";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const ping = async () => {
      const request_body = JSON.stringify({
        val1: JSON.stringify({ "97": "29" }),
        val2: "",
      });

      // const response = await request
      const response = await request(request_body, {
        Channel: "901", //sending channel to maintain the session.
      });
      const testResponse = {
        98: response[98], //Connected
        99: response[99], //true
      };

      if (testResponse[99] !== "True") {
        setLoading(false);
        throw new Error(`Please Check Internet Connection ${testResponse[98]}`);
      } else {
        await bonjour();
        setLoading(false);
      }
    };
    ping();
  }, []);

  const bonjour = async () => {
    const rsa = rsaGenerateKeyPair();
    const publicKeyWithXML = rsa.publicXML;
    const options: httpReqBonjour = {
      "00": "TUlJRGd6",
      "01": "TAB",
      "03": "",
      "76": publicKeyWithXML,
    };

    const bonjourRequestBody = JSON.stringify({
      val1: JSON.stringify({ "97": "20" }),
      val2: JSON.stringify(options),
    });

    const response = await request(
      bonjourRequestBody,
      { Channel: "901" },
      (bitool: any) => {
        dispatch(setBitool(bitool)); //(set,get) i.e storing bitool in redux store.
      }
    );

    const bonjourResponse: resBonjour = {
      98: response[98], //"Successful"
      99: response[99], //"True"
      77: response[77], //"dYJbv2xZcIu4NW8USznKUW/3e6m+LG2IUyPAlHV5vTGB1zTbU83A47zwBsh/+i35YFFxZsM02YH1HfNs6Q1LugIpEhkxpRao1l9uoodfPatgSJ4ukIFITZ6x5VA/+UHsE4WoKQ0sZL+DIZKMOydPo5zxu6tNJnJX99iT6ihQikg="
    };

    if (bonjourResponse[99] !== "True") {
      throw new Error(`Request Unsuccessful ${bonjourResponse[98]}`);
    }

    const res = rsaDecrypt(rsa.privateKey, bonjourResponse[77]);

    dispatch(setAESKey(res));
    setLoading(false);
    //  server encrypts response using public key and send it to client and  Client decrypts the response with the private key (me aftr - and create AES key with array buffer).
  };

  return (
    <div className="flex justify-center items-center ">
      {loading ? (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "40%",
          }}
        >
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
