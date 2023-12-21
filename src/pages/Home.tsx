import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <BasicLayout>"Hello"</BasicLayout>
    </>
  );
};

export default Home;
