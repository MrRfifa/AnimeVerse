import LayoutComponent from "./LayoutComponent";

const TopAnimes = () => {
  const Page = () => {
    return <h1>Top</h1>;
  };
  return (
    <LayoutComponent currentPage={"2"} mainContent={<Page />}/>
  );
}

export default TopAnimes