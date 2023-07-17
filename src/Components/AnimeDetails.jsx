import LayoutComponent from "./LayoutComponent";

const AnimeDetails = () => {
  const Page = () => {
    return <h1>Details</h1>;
  };
  return <LayoutComponent currentPage={"2"} mainContent={<Page />} />;
}

export default AnimeDetails