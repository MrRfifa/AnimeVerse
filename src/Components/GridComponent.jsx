import { Col, Row } from "antd";
import PropTypes from "prop-types";

const GridComponent = ({ data, renderItem }) => {
  return (
    <Row gutter={[16, 24]}>
      {data.map((item) => (
        <Col key={item.id} span={6}>
          {renderItem(item)}
        </Col>
      ))}
    </Row>
  );
};

GridComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default GridComponent;
