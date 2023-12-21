import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import { useAuth } from "../hooks/useAuth";

const MyProfile = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <BasicLayout>My Profile</BasicLayout>
    </>
  );
};

export default MyProfile;
