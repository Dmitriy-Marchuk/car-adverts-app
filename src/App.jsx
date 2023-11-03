import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import { BrowserRouter } from "react-router-dom";
import FindCar from "./Pages/FindCar.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Layout from "./Components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<FindCar />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
