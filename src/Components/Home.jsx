import { useState } from "react";
import { Col, Pagination, Row } from "antd";
import LayoutComponent from "./LayoutComponent";
import { useGetLatestQuery } from "../services/LatestAnimesApi";
import CardComponent from "./CardComponent";

const Home = () => {
  const { data, isFetching } = useGetLatestQuery();

  const totalLatest = data ? data.length : 0;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * 12;
  const visibleData = data?.slice(startIndex, startIndex + 12) || [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const Page = () => {
    if (isFetching) {
      return "Loading...";
    }

    const paginationText = `${startIndex + 1}-${
      startIndex + visibleData.length
    } of ${totalLatest}`;

    return (
      <>
        <Row gutter={[16, 24]}>
          {visibleData.map((item) => (
            <Col key={item.id} span={6}>
              <CardComponent
                image={item.img_url}
                id={item.id}
                name={item.name}
              />
            </Col>
          ))}
        </Row>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalLatest}
          pageSize={12}
          showTotal={() => paginationText} // Custom render function for pagination text
          style={{
            marginTop: "16px",
            textAlign: "center",
            marginBottom: "100px",
          }}
        />
      </>
    );
  };

  return <LayoutComponent currentPage={"1"} mainContent={<Page />} />;
};

export default Home;
