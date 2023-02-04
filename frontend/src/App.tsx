import React from "react";
import { Routes, Route } from "react-router-dom";
import FooterComponent from "./components/Footer/FooterComponent";
import NavBar from "./components/Navbar/NavBar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box style={ styleContainer }>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterComponent />
      </Box>
    </>
  );
}

const styleContainer : any = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

export default App;
