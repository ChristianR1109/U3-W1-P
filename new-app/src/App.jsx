import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import MyFooter from "./components/MyFooter";

import MyGalleryItem from "./components/MyGalleryItem";

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <MyGalleryItem title="Trending Now" lookingFor="One Piece" />
      <MyGalleryItem title="Watch it Again" lookingFor="Avengers" />
      <MyGalleryItem title="New Releases" lookingFor="Inazuma Eleven" />
      <MyGalleryItem title="Recommended For You" lookingFor="Batman" />
      <MyGalleryItem title="Extra" lookingFor="Captain America" />
      <MyFooter />
    </>
  );
}

export default App;
