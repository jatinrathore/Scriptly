import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";

const MyLikes = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <BasicLayout>Likes</BasicLayout>
    </>
  );
};

export default MyLikes;
