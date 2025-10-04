import React from "react";
import bannerImg1 from "../../assets/vector1.png";

const Banner = ({inProgress, resolvedCount}) => {

  return (
    <div className="max-w-[1280px] mx-auto flex gap-4 justify-center items-center flex-col lg:flex-row">
      <div className="relative w-[690px] h-[300px] rounded-xl overflow-hidden bg-gradient-to-r from-[#4f16a6] to-[#925ff0] text-white flex flex-col justify-center items-center">
       
        <img src={bannerImg1} alt="banner image" className="absolute top-0 left-0 h-full object-contain"/>
        <img src={bannerImg1} alt="banner image" className="absolute top-0 right-0 h-full object-contain scale-x-[-1]"/>

        <div className="z-10 text-center space-y-3">
          <h1 className="text-2xl font-medium">In-Progress</h1>
          <p className="text-5xl font-bold">{inProgress}</p>
        </div>
      </div>

      <div className="relative w-[690px] h-[300px] overflow-hidden rounded-xl flex flex-col justify-center items-center bg-gradient-to-l from-[#078265] to-[#22b551]">
        <div className="absolute inset-0 z-10" />
        <img src={bannerImg1} alt="Banner image" className="absolute left-0 top-0 h-full object-contain"/>
        <img src={bannerImg1} alt="Banner image" className="absolute right-0 top-0 h-full object-contain scale-x-[-1]"/>
        <div className="z-10 text-white text-center space-y-3">
          <h1 className="text-2xl font-medium">Resolved</h1>
          <p className="text-5xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
