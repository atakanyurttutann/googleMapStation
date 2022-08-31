import React from "react";
import { useSelector } from "react-redux";
import Header from "../composite/Header";
import { StationGoogleMap } from "../ui";

const HomeView = () => {
  const { mapInfo } = useSelector((state) => state.mapInfo);

  return (
    <div>
      <Header />
      <StationGoogleMap mapInfo={mapInfo} />
    </div>
  );
};

export default HomeView;
