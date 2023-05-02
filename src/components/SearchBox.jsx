import { Search } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchProvider, useSearchProvider } from "../provider/searchProvider";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const handleSearch = () => {};
  const [searchField, setsearchField] = useState("");
  const { selectedCatogory, setselectedCatogory } = useSearchProvider();

  console.log("search", searchField);
  const handleSubmit = (e) => {
    e.preventDefault();
    setselectedCatogory(searchField);
  };
  return (
    <div
      style={{ position: "relative", justifyContent: "center", margin: "auto" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="search.."
        className="searchInput"
        value={searchField}
        onChange={(e) => setsearchField(e.target.value)}
      />

      <Search
        style={{
          height: "50px",
          color: "white",
          position: "absolute",
          top: "50%",
          right: "5px",
          transform: "translateY(-50%)",
          color: "gray",
          cursor: "pointer",
        }}
        onClick={(e) => handleSubmit(e)}
      />
    </div>
  );
};

export default SearchBox;
