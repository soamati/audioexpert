import React from "react";
import { homeObjTree } from "./Data";
import { InfoSection } from "../../components";

const Made = () => {
  return (
    <>
      <InfoSection {...homeObjTree} />
    </>
  );
};

export default Made;
