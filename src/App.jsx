import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TopAnimes from './Components/TopAnimes';
import AnimeVoice from './Components/AnimeVoice';
import News from './Components/News';
import AnimeDetails from './Components/AnimeDetails';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top" element={<TopAnimes />} />
        <Route exact path="/voice" element={<AnimeVoice />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/detail/:id" element={<AnimeDetails />} />
      </Routes>
    </>
  );
}

export default App;
