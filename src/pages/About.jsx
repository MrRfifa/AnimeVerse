import LayoutComponent from "../Components/LayoutComponent";
import { Button, Col, Divider, Row, Space, Typography } from "antd";
import CardComponent from "../Components/CardComponent";
import reduxImg from "../assets/redux.png";
import reactImg from "../assets/react.png";
import antdImg from "../assets/antd.png";
import rapidApiImg from "../assets/rapid-api.png";

const About = () => {
  const Page = () => {
    return (
      <div>
        <Typography.Text>
          Welcome to our app! This application is about anime.
        </Typography.Text>
        <Divider />
        <Row gutter={[16, 16]} style={{ marginTop: "90px" }}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <CardComponent id="react" image={reactImg} name="React Js" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <CardComponent id="redux" image={reduxImg} name="Redux" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <CardComponent id="antd" image={antdImg} name="Ant Design" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <CardComponent id="rapidapi" image={rapidApiImg} name="Rapid Api" />
          </Col>
        </Row>
        <Divider />
        <Typography.Text>
          Used API&apos;s from <strong>RapidApi</strong>{" "}
        </Typography.Text>
        <Row justify={"center"} style={{marginTop:"15px"}} >
          <Space size={"large"}>
            <Button
              type="primary"
              href="https://rapidapi.com/sechno-sechno-default/api/latest-anime-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Latest Anime Api
            </Button>
            <Button
              type="primary"
              href="https://rapidapi.com/felixeschmittfes/api/myanimelist"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Anime List
            </Button>
            <Button
              type="primary"
              href="https://rapidapi.com/alsheikhaminulislam/api/anime-voice-waifu-ai-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anime Voice Waifu Ai Api
            </Button>
            <Button
              type="primary"
              href="https://rapidapi.com/sanchezballesterospablo/api/anime-news-net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anime News Net
            </Button>
          </Space>
        </Row>
      </div>
    );
  };
  return <LayoutComponent currentPage={"5"} mainContent={<Page />} />;
};

export default About;
