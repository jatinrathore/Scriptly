import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import bcrypt from "bcryptjs";
import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUsers } from "../hooks/useUsers";
import { LoginFormData, validateLoginInput } from "../models/Login";
import "./css/Form.css";

const LoginForm = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { users } = useUsers();
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  const { Text, Title } = Typography;

  const passwordRequirements =
    "Password should be at least 8 characters, including at least one capital letter and one numeric or special character.";

  //checking for user, if logged in or not
  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, []);

  //event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    const validationErrors = validateLoginInput({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validationErrors,
      [name]: "",
    }));
  };

  //handle login form submit
  const handleLogin = async () => {
    const validationErrors = validateLoginInput(formData, {
      abortEarlyProp: false,
    });

    if (Object.keys(validationErrors).length > 0)
      return setErrors(validationErrors);

    setErrors({});

    //checking for same user's email
    const user = users.find((user) => user.email === formData.email);
    const customID = "custom-id-yes";
    if (!user)
      return toast.warn("User not found. Please check your details.", {
        style: { backgroundColor: "#F24C3D" },
        toastId: customID,
      });

    //comparing password from database and input field
    const hashedPassword = user.password;
    try {
      const isValid = await bcrypt.compare(formData.password, hashedPassword);

      if (!isValid)
        return toast.warn("Incorrect password. Please check you details.", {
          style: { backgroundColor: "#F24C3D" },
          toastId: customID,
        });

      if (isValid) {
        //creating token for user login
        const payload = {
          id: user.id,
          email: user.email,
        };
        login(JSON.stringify(payload));

        navigate("/home");
        toast.info("User successfully Logged in. Welcome aboard!", {
          toastId: customID,
        });
      }
    } catch (error) {
      console.log("password encryption error", error);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <Title level={1} style={{ color: "#45474b", marginBottom: "50px" }}>
          Log In
        </Title>
      </div>
      <Form onFinish={handleLogin}>
        <div className="input-fields--box">
          <Flex vertical gap="15px">
            <Text className="input-fields--heading">
              Welcome to Scriptly! Login to your account.
            </Text>
            <Input
              prefix={
                <MdEmail style={{ marginRight: "15px", color: "grey" }} />
              }
              placeholder="Enter email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="box__input"
            ></Input>
            {errors.email && <Text className="error-text">{errors.email}</Text>}

            <Input.Password
              prefix={<FaLock style={{ marginRight: "15px", color: "grey" }} />}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="box__input"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            {errors.password && (
              <Text className="error-text">{passwordRequirements}</Text>
            )}
          </Flex>
        </div>
        <Form.Item
          className="buttons"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Button
            type="primary"
            size="large"
            className="form_submit--button"
            htmlType="submit"
            style={{ width: "7rem" }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
