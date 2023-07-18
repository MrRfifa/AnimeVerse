import { Avatar, Card, Col, Row, Typography } from "antd";
import LayoutComponent from "../Components/LayoutComponent";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../services/AnimeDetailsApi";
import LoadingComponent from "../Components/LoadingComponent";

const AnimeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDetailsQuery(id);

  if (isLoading) {
    return <LoadingComponent text="Please wait for the details" />;
  }

  if (!data) {
    return <div>Anime not found.</div>;
  }

  const Page = () => {
    return (
      <Row gutter={[16, 24]} style={{ minHeight: "100vh" }}>
        <Col span={6} style={{ textAlign: "center" }}>
          <Avatar size={200} src={data.picture_url} />
          <Typography.Title level={3}>
            {data.alternative_titles.english}
          </Typography.Title>
          <Typography.Title level={4}>
            Rank: {data.statistics.ranked}
          </Typography.Title>
          <Typography.Title level={4}>
            Score: {data.statistics.score}
          </Typography.Title>
        </Col>
        <Col span={18}>
          <Card title="Description">
            <Typography.Paragraph>{data.synopsis}</Typography.Paragraph>
          </Card>
          <Row gutter={[16, 24]} style={{marginTop:"15px"}} >
            {data.characters.map((character) => (
              <Col key={character.picture_url} xs={24} sm={12} md={8} lg={6}>
                <Avatar
                  size={70}
                  src={character.picture_url}
                  alt={character.name}
                  shape="square" // Set shape prop to "square" for square avatars
                />
                <Typography>{character.name}</Typography>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  };

  return <LayoutComponent currentPage={"2"} mainContent={<Page />} />;
};

export default AnimeDetails;
