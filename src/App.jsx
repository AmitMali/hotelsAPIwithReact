import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import MainLayout from "../components/layoutes/MainLayout";
import Forms from "../pages/Forms";
import Home from "../pages/Home";
import PropertyDetail from "../pages/PropertyDetail";
import Test from "../pages/Test";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/property">
            <Route path=":property_id" element={<PropertyDetail />}></Route>
          </Route>
          <Route path="/test">
            <Route index element={<Test />} />
            <Route path="forms" element={<Forms />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
