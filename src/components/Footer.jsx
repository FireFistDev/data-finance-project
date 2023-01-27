import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w=[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
            </p>
            <div className="w-full justify-between flex text-5xl md:w-[75%]">
            <FaDribbbleSquare />
            <FaFacebookSquare  />
            <FaGithubSquare  />
            <FaInstagramSquare  />
            <FaTwitterSquare />
            </div>
        </div>
        <div className="flex col-span-2 justify-between">
            <div >
                <h6 className="font-medium text-xl text-gray-500">Solututions</h6>
                <ul className="mt-5">
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Comercial</li>
                    <li className="py-2 text-sm">Insight</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-xl text-gray-500">Support</h6>
                <ul className="mt-5">
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API STATUS</li>
                </ul>
            </div>
            <div >
                <h6 className="font-medium text-xl text-gray-500">Company</h6>
                <ul className="mt-5">
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">jobs</li>
                    <li className="py-2 text-sm">Carrers</li>
                </ul>
            </div>
        </div>

    </div>
  );
};

export default Footer;
