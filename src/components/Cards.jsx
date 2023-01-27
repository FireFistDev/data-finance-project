import React from "react";
import double from "../assets/double.png";
import single from "../assets/single.png";
import triple from "../assets/triple.png";
import CardItem from "./CardItem";

const DUMMY_DATA = [
  {
    id:'Us1',
    pakage: "Single User",
    price: 149,
    storage: '500 GB',
    user: 1,
    sentUp: 2,
    image: single,
  },
  {
    id:'Us2',
    pakage: "Partnership",
    price: 199,
    storage: '1 TB',
    user: 3,
    sentUp: 10,
    image: double,
  },
  {
    id:'Us3',
    pakage: "Single User",
    price: 299,
    storage: '5 TB',
    user: 10,
    sentUp: 20,
    image: triple,
  },
];
const Cards = () => {
  const cartItems = DUMMY_DATA.map((el) => (
    <CardItem key={el.id} pakage={el} />
  ));
  return (
    <div className="w-full py-[10rem]  px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cartItems}
      </div>
    </div>
  );
};

export default Cards;
