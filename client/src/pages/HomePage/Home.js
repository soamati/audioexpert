import React from "react";
import { homeObjOne, homeObjTwo, homeObjTree } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjTree} />
    </>
  );
};

export default Home;
