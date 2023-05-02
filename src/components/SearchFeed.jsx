import React from "react";
import { useParams } from "react-router-dom";
import Vidoes from "./Vidoes";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  return <Vidoes selectedCatogory={searchTerm} />;
};

export default SearchFeed;
