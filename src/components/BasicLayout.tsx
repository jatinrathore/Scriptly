import {
  BookOutlined,
  FileAddOutlined,
  HeartOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ProLayout, { MenuDataItem, PageContainer } from "@ant-design/pro-layout";
import { Button, Col, Image, Row, Space, Typography } from "antd";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import scriptlyLogo from "../assets/Scriptly-logo.png";

const menuData: MenuDataItem[] = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeOutlined size={21} style={{ color: "black" }} />,
  },
  {
    path: "/my-likes",
    name: "My Likes",
    icon: <HeartOutlined size={18} style={{ color: "black" }} />,
  },
  {
    path: "/my-bookmarks",
    name: "My Bookmarks",
    icon: <FileAddOutlined size={18} style={{ color: "black" }} />,
  },
  {
    path: "/my-posts",
    name: "My Posts",
    icon: <BookOutlined size={18} style={{ color: "black" }} />,
  },
  {
    path: "/my-profile",
    name: "My Profile",
    icon: <UserOutlined size={18} style={{ color: "black" }} />,
  },
];

const BasicLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { Text, Title } = Typography;
  const customLogo = (
    <Row align="middle">
      <Col>
        <Image
          src={scriptlyLogo}
          style={{ height: "55px", marginBottom: "3px" }}
          preview={false}
        />
      </Col>
      <Col>
        <Title level={1} style={{ marginLeft: "10px", fontSize: "30px" }}>
          Scriptly
        </Title>
      </Col>
    </Row>
  );
  return (
    <ProLayout
      layout="mix"
      navTheme="light"
      fixSiderbar
      headerTitleRender={() => customLogo}
      menuDataRender={() => menuData}
      menuItemRender={(item) => (
        <Link to={item.path || "/"}>
          <Space>
            {item.icon && <Button type="link" icon={item.icon} />}
            <Text>{item.name}</Text>
          </Space>
        </Link>
      )}
      selectedKeys={[location.pathname]}
    >
      <PageContainer>{children}</PageContainer>
    </ProLayout>
  );
};

export default BasicLayout;
