import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isscrolled, setisscrolled] = useState(false);
  const navigate = useNavigate();
  const { color } = props;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setisscrolled(true);
      } else {
        setisscrolled(false);
      }
    };
    console.log("Color prop changed:", color);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [color]);

  const navBackground = color
    ? `bg-${color}-500`
    : isscrolled
    ? "bg-blue-100"
    : "";

  return (
    <nav
      className={`flex justify-center p-3  ${
        isscrolled
          ? "bg-blue-100 text-slate-800"
          : `bg-${color}-500 text-slate-100`
      }`}
      style={{ position: "sticky", top: 0, zIndex: "10" }}
    >
      <div className="max-w-7xl w-full flex justify-between items-center">
        <h1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          LOGO
        </h1>
        <ul className="flex gap-5">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => navigate("/ServicePage")}
          >
            Services
          </li>
          <li className="cursor-pointer">Company</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
