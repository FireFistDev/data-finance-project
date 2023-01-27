import React from "react";
import Typed from 'react-typed'

const MainHero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">fast , flexible financinf for </p>
          <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-5 text-gray-500" strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className="md:text-2xl text-xl p-2 font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB & SASS platform</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default MainHero;
