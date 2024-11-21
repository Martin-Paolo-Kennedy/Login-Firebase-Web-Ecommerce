import React from "react";
import NavBar from "./NavBar"; // Ruta corregida
import Header from "./Header";
import Carousel from "./Carousel";
import ProductCards from "./Card";
import Aside from "./Aside";
import Article from "./Article";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Carousel />
      <ProductCards />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          padding: 2,
          width: "100%",
        }}
      >
        <Aside />
        <Article />
      </Box>
    </>
  );
};

export default Home;
