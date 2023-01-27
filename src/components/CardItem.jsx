import React from "react";
import double from "../assets/double.png";
import single from "../assets/single.png";
import triple from "../assets/triple.png";
const CardItem = (props) => {
  return (
    <>
      <div className="w-full shadow-xl  flex flex-col my-4 rounded-lg border hover:scale-110 duration-300">
        <img
          className="w-20 mx-auto mt-[-3rem] bg-white"
          src={props.pakage.image}
          alt="/"
        />
        <h2 className="text-2xl font-bold text-center py-8 ">
          {props.pakage.pakage}
        </h2>
        <p className="text-center text-4xl fort-bold">${props.pakage.price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">
            {props.pakage.storage} Storage
          </p>
          <p className="py-2 border-b mx-8 ">
            {props.pakage.user} Users Allowed
          </p>
          <p className="py-2 border-b mx-8 ">
            Sent up to {props.pakage.sentUp} GB
          </p>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a]">
          start Trial
        </button>
      </div>
    </>
  );
};

export default CardItem;
