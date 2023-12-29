import { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { encryptWithDecrypt } from "../request";
const LoginPage = () => {
  const { bitool, AESKey } = useSelector((state: any) => state.global);

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [mob_no, setMobNo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const options = {
      "42": mob_no,
      "02": password,
      "03": "bitool",
      "01": userid,
      "103": "",
    };

    const requestBody = {
      val1: { "97": "01" }, //for login
      val2: options, //user information
    };

    const decryptedRes = await encryptWithDecrypt(requestBody, AESKey, bitool);
    console.log("log in", decryptedRes);
  };
  return (
    <div className="w-1/2 h-[50vh] bg-indigo-200 flex flex-col justify-center items-center gap-y-2">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label htmlFor="userid" className="text-black">
            User ID:
          </label>
          <input
            className="textField"
            type="text"
            id="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          <label htmlFor="password" className="text-black">
            Password:
          </label>
          <input
            className="textField"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="mob_no" className="text-black">
            Mobile No:
          </label>
          <input
            className="textField"
            type="text"
            id="mob_no"
            value={mob_no}
            onChange={(e) => setMobNo(e.target.value)}
          />
          <button className="bg-green-400 border rounded-lg p-2">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
