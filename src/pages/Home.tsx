import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";
import { Button } from "antd";
import { toast } from "react-toastify";

const Home = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <BasicLayout>
        <Button
          onClick={() => {
            logout();
            toast.info("Logged out successfully", {});
            navigate("/");
          }}
        >
          Log out
        </Button>
      </BasicLayout>
    </>
  );
};

export default Home;
