import React from "react";
import {
  AlertOutlined,
  HomeOutlined,
  NotificationOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row, theme } from "antd";
import icon from "../assets/aniverse.png";
const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    icon: HomeOutlined,
    label: "Latest Animes",
    clickEvent: () => {
      window.location.href = "/";
    },
  },
  {
    icon: OrderedListOutlined,
    label: "Top Animes",
    clickEvent: () => {
      window.location.href = "/top";
    },
  },
  {
    icon: NotificationOutlined,
    label: "Voice",
    clickEvent: () => {
      window.location.href = "/voice";
    },
  },
  {
    icon: AlertOutlined,
    label: "News",
    clickEvent: () => {
      localStorage.clear();
      window.location.href = "/news";
    },
  },
];

const items = data.map((sideBarItem, index) => ({
  key: String(index + 1),
  icon: React.createElement(sideBarItem.icon),
  label: String(sideBarItem.label),
  onClick: sideBarItem.clickEvent,
}));
const LayoutComponent = ({ mainContent, currentPage }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <Row
            style={{
              marginTop: "200px",
              marginBottom: "180px",
            }}
          >
            <Col span={24}>
              <Avatar size={128} src={icon} />
            </Col>
          </Row>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={currentPage}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            {mainContent}
          </div>
        </Content>
        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          AnimeVerse <br />
          Copyrights reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
