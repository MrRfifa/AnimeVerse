import LayoutComponent from "./LayoutComponent";

const AnimeVoice = () => {
  const Page = () => {
    return <h1>Anime voice</h1>;
  };
  return (
    <LayoutComponent currentPage={"3"} mainContent={<Page />} />
  );
}

export default AnimeVoice