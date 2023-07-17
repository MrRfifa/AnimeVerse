import LayoutComponent from "./LayoutComponent";

const News = () => {
  const Page = () => {
    return <h1>News</h1>;
  };
  return (
    <LayoutComponent currentPage={"4"} mainContent={<Page />}/>
  );};

export default News;
