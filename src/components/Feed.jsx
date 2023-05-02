import React, { useState } from "react";
import SideBar from "./SideBar";
import Vidoes from "./Vidoes";
import { useSearchProvider } from "../provider/searchProvider";

const Feed = () => {
  // const [selectedCatogory, setselectedCatogory] = useState("New");

  const { selectedCatogory, setselectedCatogory } = useSearchProvider();
  console.log("selected", selectedCatogory);

  const catogory = {
    selectedCatogory: selectedCatogory,
    setselectedCatogory: setselectedCatogory,
  };
  return (
    <div className="feed">
      <SideBar catogory={catogory} />
      <Vidoes selectedCatogory={selectedCatogory} />
    </div>
  );
};

export default Feed;
