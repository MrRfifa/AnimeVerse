import { Spin } from "antd";
import PropTypes from "prop-types";

const LoadingComponent = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin size="large" />
      <p style={{ marginTop: 16 }}>{text}</p>
    </div>
  );
};
LoadingComponent.propTypes = {
  text: PropTypes.string.isRequired, // Assuming 'text' should be a required string prop
};

export default LoadingComponent;
