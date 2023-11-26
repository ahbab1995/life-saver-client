import React from "react";
import multitool from "../../assets/multitool-hero.jpg";
import tubelesstool from "../../assets/tubelesstool-hero.jpg";

const Incredible = () => {
  return (
    <div>
      <div>
        <h1 className="lg:text-5xl text-3xl mt-16 text-center">
          Incredible: register now for in-stock notification
        </h1>
      </div>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:p-10 lg:mx-10">
            <p className=" text-2xl my-10">Incredible Multitool</p>
            <img src={multitool} alt="" className=" rounded-lg shadow-2xl " />
          </div>
          <div className=" lg:p-10 lg:mx-10">
            <p className=" text-2xl my-10">Incredible Tubeless Tool</p>
            <img src={tubelesstool} alt="" className=" rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incredible;
