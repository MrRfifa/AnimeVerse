import { useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Empty,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import LayoutComponent from "../Components/LayoutComponent";
import { useGetVoiceQuery } from "../services/WaifuVoiceApi";
import girlImage from "../assets/cute.png";
import LoadingComponent from "../Components/LoadingComponent";
import AudioComponent from "../Components/AudioComponent";

const { Title } = Typography;

const AnimeVoice = () => {
  const [inputValue, setInputValue] = useState("");

  const { data, isLoading, refetch } = useGetVoiceQuery({
    text: inputValue,
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    refetch();
  };

  const Page = () => {
    return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={20} sm={16} md={12} lg={10} xl={8}>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <Avatar alt="Character image" src={girlImage} size={128} />
            </Col>
          </Row>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <Title level={4}>Enter Text and Hear the Voice</Title>
            </Col>
          </Row>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <Space size="middle">
                <Input
                  placeholder="Write some text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <Button type="primary" onClick={handleButtonClick}>
                  Submit
                </Button>
              </Space>
            </Col>
          </Row>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              {!data ? (
                <Empty />
              ) : isLoading ? (
                <LoadingComponent text="Fetching the sound" />
              ) : (
                <AudioComponent src={data.mp3DownloadUrl} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  return <LayoutComponent currentPage={"3"} mainContent={<Page />} />;
};

export default AnimeVoice;
