import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TopAnimes from "./pages/TopAnimes";
import AnimeVoice from "./pages/AnimeVoice";
import News from "./pages/News";
import AnimeDetails from "./pages/AnimeDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top" element={<TopAnimes />} />
        <Route exact path="/voice" element={<AnimeVoice />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/detail/:id" element={<AnimeDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
