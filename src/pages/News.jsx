import { useState } from "react";
import { Col, Pagination, Row } from "antd";
import LayoutComponent from "../Components/LayoutComponent";
import LoadingComponent from "./../Components/LoadingComponent";
import CardComponent from "./../Components/CardComponent";
import { useGetNewsQuery } from "../services/AnimeNewsApi";

const News = () => {
  const { data, isFetching } = useGetNewsQuery();

  const totalLatest = data ? data.length : 0;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * 4;
  const visibleData = data?.slice(startIndex, startIndex + 4) || [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const Page = () => {
    if (isFetching) {
      return <LoadingComponent text="Please wait for the list" />;
    }
    const paginationText = `${startIndex + 1}-${
      startIndex + visibleData.length
    } of ${totalLatest}`;

    return (
      <>
        <Row gutter={[16, 16]}>
          {visibleData.map((item) => (
            <Col key={item.id} span={24}>
              <CardComponent
                news={true}
                image={item.article.thumbnail}
                id={item.article.id}
                name={item.article.title}
                key={item.article.id}
                title={item.article.title}
                date={item.article.date}
                description={item.article.summary}
                link={item.article.url}
              />
            </Col>
          ))}
        </Row>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalLatest}
          pageSize={4}
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

  return <LayoutComponent currentPage={"4"} mainContent={<Page />} />;
};

export default News;
