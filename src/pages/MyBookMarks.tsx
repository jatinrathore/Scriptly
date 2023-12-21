import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";

const MyBookMarks = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <BasicLayout>My BookMarks</BasicLayout>
    </>
  );
};

export default MyBookMarks;
