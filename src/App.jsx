import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import MainLayout from "../components/layoutes/MainLayout";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import PropertyDetail from "../pages/PropertyDetail";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/property">
            <Route path=":id" element={<PropertyDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
