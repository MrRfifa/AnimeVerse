import { Card } from "antd";
const { Meta } = Card;
const CardComponent = ({image,name,id}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt={id}
        src={image}
      />
    }
  >
    <Meta title={name} />
  </Card>
);
export default CardComponent;
