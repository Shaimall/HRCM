import React from "react";
import PropTypes from "prop-types";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  return (
    <div>
      <div className="md:block hidden absolute inset-x-16">
        <div className="flex mt-16">
          <div className="">
            <img className=" " src="img/ring.png" alt="" />
          </div>
          <div className="flex flex-auto gap-3 justify-center ">
            <p className="text-xl text-white">About Us</p>
            <p className="text-xl text-white">Projects</p>
            <p className="text-xl text-white">Media</p>
            <p className="text-xl text-white">Clients</p>
            <p className="text-xl text-white">Contact Us</p>
          </div>

          <div className=" ml-10 justify-self-end">
            {" "}
            <div className=" flex flex-col gap-y-10  ">
              <BsFacebook className="text-white text-xl" />
              <BsTwitter className="text-white text-xl" />
              <BsInstagram className="text-white text-xl" />
              <FaLinkedinIn className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="block md:hidden">
          <button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 focus:outline-none  focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu className="block md:hidden h-6 w-6 text-white" />
          </button>
          <div className="p-6 w-1/2 h-screen z-20 fixed top-0 -right-96  peer-focus:right-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
              <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5  rounded-xl p-2  m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    About Us
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 rounded-xl   p-2  m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Projects
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 rounded-xl   p-2  m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Media
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5  rounded-xl   p-2  m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Clients
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5  rounded-xl   p-2  m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Contact Us
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" flex flex-col  gap-y-10 pr-7 mt-20  ">
            <BsFacebook className="text-white text-xl" />
            <BsTwitter className="text-white text-xl" />
            <BsInstagram className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
