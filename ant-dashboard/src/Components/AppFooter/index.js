import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel+123456789">+1234556789</Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Terms of use
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
