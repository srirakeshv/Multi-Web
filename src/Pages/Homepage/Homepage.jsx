import React from "react";
import Carousal from "../../Components/Homepage/Carousal";
import Carousal2 from "../../Components/Homepage/Carousal2";
import Poadcast from "../../Components/Homepage/Poadcast";
import Navbar from "../../Components/Homepage/Navbar";
import Banner from "../../Components/Homepage/Banner";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="">
      <div style={{ position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          className="video-app"
          src={`${process.env.PUBLIC_URL}/asset/video/3d_mock-up_demonstration_of_a_satellite (720p).mp4`}
          type="video/mp4"
        />
        <Navbar />
        <Banner />
        <Carousal />
      </div>
      <Poadcast />
      <Carousal2 />
    </div>
  );
};

export default Homepage;