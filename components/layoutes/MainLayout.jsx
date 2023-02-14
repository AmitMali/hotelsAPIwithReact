import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = () => {
  const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ];
  const title = "Property Site";
  return (
    <>
      <Container maxWidth="lg">
        <div className="container">
          <Navbar sections={sections} title={title} />
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="container">
          <Outlet />
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className="container">
          <Footer description="Some Description" title={title} />
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
