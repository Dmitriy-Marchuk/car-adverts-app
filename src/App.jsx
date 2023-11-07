import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import HomePage from "Pages/HomePage.jsx";
import FindCar from "Pages/FindCar.jsx";
import Favorites from "Pages/Favorites.jsx";
import Layout from "Components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter basename="/car-buying-app">
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
