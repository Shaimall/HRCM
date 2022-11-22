import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationSearching } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-12 pt-24 px-3 md:px-0">
        <div className="md:col-span-4">
          <h className="text-[#383838]">Hotel Resort Construction</h>
          <p className="text-[#727272]">
            1st Floor, H.Sea Side, Boduthakurufaanu Magu,<br></br> Male' ,
            Republic of Maldives.<br></br> Phone: +960 332 5602 Fax: +960 332
            <br></br>
            5601 Email: info@hotelsresortsconstruction.com
          </p>
          <div className="mt-32 pb-6 md:flex gap-14 hidden">
            <BsFacebook className="text-2xl" />
            <BsTwitter className="text-2xl" />
            <BsInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
          </div>
        </div>
        <div className="md:col-span-3 "></div>
        <div className="col-span-2 place-items-center mt-14 md:mt-0">
          <h className="text-[#383838]">We have partners in</h>
          <div className="md:block hidden">
            <p className="text-[#727272] mt-6">New Zeland</p>
            <p className="text-[#727272]">Qatar</p>
            <p className="text-[#727272]">Singapore</p>
            <p className="text-[#727272]">Srilanka</p>
            <p className="text-[#727272]">Thailand</p>
          </div>
          <div className="md:hidden flex gap-2">
            <p className="text-[#727272] ">New Zeland,</p>
            <p className="text-[#727272]">Qatar,</p>
            <p className="text-[#727272]">Singapore,</p>
            <p className="text-[#727272]">Srilanka,</p>
          </div>
          <p className="text-[#727272] md:hidden">Thailand</p>
        </div>
        <div className="md:col-span-3 mt-20 md:mt-0 mb-4 md:block hidden ">
          <a href="https://goo.gl/maps/cXXuhgfHwvGZX1qM9">
            <button className="px-6 py-3 bg-[#F5F5F5] text-[#38383] text-sm flex gap-2 rounded-xl ">
              <MdOutlineLocationSearching className="text-[#2EA1F9] mt-1 text-xs" />
              5GF9+32 Malé
            </button>
          </a>
          <p className="text-[#AAAAAA] text-sm mt-52 pb-6 ml-auto">
            All rights reserved. 2021
          </p>
        </div>
        <div className="md:hidden flex mt-16 mb-4 gap-5 ">
          <a href="https://goo.gl/maps/cXXuhgfHwvGZX1qM9">
            <button className="px-6 py-3 bg-[#F5F5F5] text-[#38383] text-sm flex gap-2 rounded-xl">
              <MdOutlineLocationSearching className="text-[#2EA1F9] mt-1 text-xs" />
              5GF9+32 Malé
            </button>
          </a>
          <div className=" flex mt-3 gap-x-9 ">
            <BsFacebook className="" />
            <BsTwitter className="" />
            <BsInstagram className="" />
            <FaLinkedinIn className="" />
          </div>
        </div>
      </div>
      <div className="block md:hidden bg-[#F8F8F8]">
        <div className="flex justify-center py-3 px-20">
          <p className="text-[#AAAAAA]">All rights reserved. 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
