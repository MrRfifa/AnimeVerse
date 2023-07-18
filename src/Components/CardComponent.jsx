import { Button, Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import { Typography } from "antd"; // Import Typography
const { Title, Text } = Typography; // Destructure Typography components

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };

  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
};

const CardComponent = ({
  news,
  image,
  name,
  id,
  title,
  date,
  description,
  link,
}) =>
  !news ? (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={id} src={image} />}
    >
      <Card.Meta title={name} />
    </Card>
  ) : (
    <Card
      style={{
        marginBottom: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <img
            src={image}
            alt={title}
            style={{ width: "45%", borderRadius: "8px" }}
          />
        </Col>
        <Col xs={24} sm={12} md={16} lg={16} xl={16}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={3}>{title}</Title>
              <br />
              <Text strong>Description:</Text> {description}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Text>{formatDate(date)}</Text>
              </div>
              <div>
                <Button
                  type="primary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );

CardComponent.propTypes = {
  news: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardComponent;
