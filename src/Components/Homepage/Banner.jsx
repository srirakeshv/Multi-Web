import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      className="p-3 flex justify-center items-center text-slate-100"
      style={{
        minHeight: "80vh",
        position: "inherit",
        zIndex: "10",
      }}
    >
      <div className="text-3xl">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "We produce food for Mice",
            1000,
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Banner;
