// AppRouter

// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";
import PageMovie from "../pages/PageMovie";
import PageFavourites from "../pages/PageFavourites";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/SSD-React-Movie-App" exact element={<PageHome />} />
            <Route path="/favourites" element={<PageFavourites />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="/movie/:id" exact element={<PageMovie />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;