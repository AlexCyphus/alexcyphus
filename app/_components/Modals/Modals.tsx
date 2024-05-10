"use client";

import AboutModal from "./AboutModal";
import WorkModal from "./WorkModal/WorkModal";
import TravelModal from "./TravelModal/TravelModal";

const Modals = () => {
  // dont render if server side
  if (typeof window === "undefined") return null;

  return (
    <>
      <AboutModal />
      <TravelModal />
      <WorkModal />
    </>
  );
};

export default Modals;
