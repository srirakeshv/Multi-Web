import React, { useEffect } from "react";
import Servicefile from "../../Components/Services/Servicefile";
import Navbar from "../../Components/Homepage/Navbar";
import Poadcast from "../../Components/Homepage/Poadcast";
import Progressbar from "../../Components/Common/Progressbar";

const ServicePage = () => {
  useEffect(() => {
    document.title = "Web page - Service Page";
  }, []);

  return (
    <div>
      <Progressbar />
      <Navbar color="green" />
      <Servicefile />
      <Poadcast />
    </div>
  );
};

export default ServicePage;
