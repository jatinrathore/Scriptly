import scriptlyLogo from "../assets/Scriptly-logo.png";
import { Image, Typography } from "antd";
const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "5px",
        padding: "20px",
      }}
    >
      <Image src={scriptlyLogo} height="75px" preview={false} />
      <Typography.Text
        style={{
          fontSize: "30px",
          fontWeight: 600,
          fontFamily: "monospace",
          marginTop: "10px",
          marginLeft: "5px",
        }}
      >
        Scriptly
      </Typography.Text>
    </div>
  );
};

export default NavBar;
