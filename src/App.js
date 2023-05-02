import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Feed,
  ChannelDetails,
  SearchFeed,
  VideoDetails,
  Header,
} from "./components";
import { createContext, useState } from "react";
import { SearchProvider } from "./provider/searchProvider";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Header />

        <Box>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<Feed />} />
            <Route path="/channel/:id" exact element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            <Route path="/videoDetails/:id" exact element={<VideoDetails />} />
          </Routes>
        </Box>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
