import { useState } from "react";
import { Pagination } from "antd";
import LayoutComponent from "../Components/LayoutComponent";
import { useGetLatestQuery } from "../services/LatestAnimesApi";
import LoadingComponent from "./../Components/LoadingComponent";
import GridComponent from "../Components/GridComponent";
import CardComponent from "./../Components/CardComponent";

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
      return <LoadingComponent text="Please wait for the list" />;
    }
    const renderItem = (item) => (
      <CardComponent
        news={false}
        image={item.img_url}
        id={item.id}
        name={item.name}
        key={item.id}
      />
    );
    const paginationText = `${startIndex + 1}-${
      startIndex + visibleData.length
    } of ${totalLatest}`;

    return (
      <>
        <GridComponent data={visibleData} renderItem={renderItem} />
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
