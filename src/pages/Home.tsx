import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";
import { Button } from "antd";

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
