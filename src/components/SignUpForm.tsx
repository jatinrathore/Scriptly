import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import bcrypt from "bcryptjs";
import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUsers } from "../hooks/useUsers";
import { FormData, validateSignupInput } from "../models/Signup";
import { User } from "../models/Users";
import "./css/Form.css";

interface Props {
  onSignUpSuccess: () => void;
}
const SignUpForm = ({ onSignUpSuccess }: Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const { users, saveUser } = useUsers();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const { Text, Title } = Typography;

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, []);

  const passwordRequirements =
    "Password should be at least 8 characters, including at least one capital letter and one numeric or special character.";

  //event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    const validationErrors = validateSignupInput({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validationErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateSignupInput(formData, {
      abortEarlyProp: false,
    });

    if (Object.keys(validationErrors).length > 0)
      return setErrors(validationErrors);

    setErrors({});

    const duplicateUser = users.find((user) => user.email === formData.email);
    const customId = "id";
    if (duplicateUser)
      return toast.warn(
        "An account with this email address is already registered.\nPlease log in or use a different email.",
        {
          style: { backgroundColor: "#F24C3D" },
          toastId: customId,
        }
      );

    //password encryption and saving user in localstorage
    const saltRounds = await bcrypt.genSalt(10);
    try {
      const hashedPassword = await bcrypt.hash(formData.password, saltRounds);
      const newUser: User = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      };

      saveUser(newUser);

      // Clearing the input fields after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      const customID = "custom-id-yes";

      toast.info("User successfully created. Please Log in", {
        toastId: customID,
      });
      onSignUpSuccess();
    } catch (error) {
      console.log("Error in password encryption", error);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <Title level={1} style={{ color: "#45474b", marginBottom: "50px" }}>
          Sign Up
        </Title>
      </div>
      <Form onFinish={handleSubmit}>
        <div className="input-fields">
          <Flex vertical gap="15px">
            <Text className="input-fields--heading">
              Join Scriptly today! Sign up now to get started.
            </Text>
            <Input
              prefix={<FaUser style={{ marginRight: "15px", color: "grey" }} />}
              placeholder="Enter name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              name="name"
              style={{ height: "45px", fontSize: "16px" }}
            />
            {errors.name && <Text className="error-text">{errors.name}</Text>}

            <Input
              prefix={
                <MdEmail style={{ marginRight: "15px", color: "grey" }} />
              }
              placeholder="Enter email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              style={{ height: "45px", fontSize: "16px" }}
            />
            {errors.email && <Text className="error-text">{errors.email}</Text>}

            <Input.Password
              prefix={<FaLock style={{ marginRight: "15px", color: "grey" }} />}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ height: "45px", fontSize: "16px" }}
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
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
