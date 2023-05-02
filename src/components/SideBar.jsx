import React, { useState } from "react";
import { categories } from "../utils/constants";
import { Home } from "@mui/icons-material";

const SideBar = ({ catogory }) => {
  const { selectedCatogory, setselectedCatogory } = catogory;

  return (
    <div className="sidebar mr-auto flex-nowrap overflow-auto">
      {categories.map((item) => (
        <div
          key={item.name}
          onClick={() => setselectedCatogory(item.name)}
          className="category-btn"
          style={{
            backgroundColor: selectedCatogory === item.name ? "#FC1503" : "",
          }}
        >
          <span
            style={{
              color: selectedCatogory === item.name ? "" : "red",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: selectedCatogory === item.name ? 1 : 0.8 }}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
