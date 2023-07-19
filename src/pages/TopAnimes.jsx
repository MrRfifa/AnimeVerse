import { Pagination } from "antd";
import GridComponent from "../Components/GridComponent";
import LayoutComponent from "../Components/LayoutComponent";
import LoadingComponent from "../Components/LoadingComponent";
import { useGetTopQuery } from "../services/TopAnimesApi";
import { useState } from "react";
import CardComponent from "../Components/CardComponent";
import { Link } from "react-router-dom";

const TopAnimes = () => {
  const { data, isFetching } = useGetTopQuery();
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

    // Check if data is an array before rendering
    if (!Array.isArray(data)) {
      return <div>No data available.</div>;
    }

    const renderItem = (item) => (
      <Link to={`/detail/${item.myanimelist_id}`}>
        <CardComponent
          news={false}
          image={item.picture_url}
          id={item.myanimelist_id}
          name={item.title}
          key={item.myanimelist_id}
        />
      </Link>
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

  return <LayoutComponent currentPage={"2"} mainContent={<Page />} />;
};

export default TopAnimes;
