import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <header className="min-h-[586px] bg-slate-500 relative">
        <div className=" container md:px-0 mx-auto md:py-72 py-36  ">
          <h className="text-white md:text-7xl text-5xl font-bold leading-relaxed md:text-left hidden md:block ">
            Leading Hotel Resort<br></br> Contractor in the<br></br> Maldives
          </h>
          <h className="flex justify-center text-center text-3xl text-white font-bold leading-relaxed md:hidden ">
            {" "}
            Leading Hotel<br></br> Resort<br></br> Contractor in the<br></br>{" "}
            Maldives
          </h>
        </div>
      </header>
      <section className="md:bg-white bg-[#F8F8F8]">
        <div className="container mx-auto md:pt-80  ">
          <div className=" ">
            <Card />
          </div>
          <h className="text-[#383838] text-5xl  ">About Us.</h>
          <div className="md:border-t-8 border-t-4 mt-10">
            <div className=" grid md:grid-cols-12 grid-cols-2 mt-20 ">
              <div className="md:col-span-2">
                <h className="text-[#770A12] text-4xl md:text-7xl">52</h>
                <p className="text-[#383838] mt-3">Resort Projects</p>
              </div>
              <div className="md:col-span-2">
                <h className="text-[#770A12] text-4xl md:text-7xl">5</h>
                <p className="text-[#383838] mt-3">Airport projects</p>
              </div>
              <div className="md:col-span-2">
                <h className="text-[#770A12] text-4xl md:text-7xl">100</h>
                <p className="text-[#383838] mt-3">Customer Satisfaction</p>
              </div>
              <div className="col-span-4 hidden md:block"></div>
              <div className="md:col-span-2">
                <h className="text-[#770A12] text-4xl md:text-7xl">20743</h>
                <p className="text-[#383838] mt-3">Coffee Cups</p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 md:mt-28 mt-16">
              <div className="md:col-span-3 px-3">
                <div className="  border-b-2 border-gray-600 py-3">
                  <h className="text-[#383838] text-xl font-semibold">
                    Most experienced in the industry in Maldives
                  </h>
                </div>
                <div className=" border-b-2 border-gray-600 py-3">
                  <h className="text-[#383838] text-xl font-semibold">
                    Remarkable track record
                  </h>
                </div>
                <div className=" border-b-2 border-gray-600 py-3">
                  <h className="text-[#383838] text-xl font-semibold">
                    One stop solution
                  </h>
                </div>
                <div className=" border-b-2 border-gray-600 py-3">
                  <h className="text-[#383838] text-xl font-semibold">
                    Complete turnkey construction
                  </h>
                </div>
                <div className="py-3">
                  <h className="text-[#383838] text-xl font-semibold">
                    Unique and creative designs
                  </h>
                </div>
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-8 md:pr-36  mt-16 md:mt-0 px-3">
                <p className="text-[#575757]">
                  Incorporated in the Republic of Maldives in 2007, Hotels and
                  Resort Construction Private Limited or HRC is an off-shoot of
                  the parent company Alysen Services Private Limited (ASPL)
                  formed in 1979. HRC is engaged in providing distinctive
                  excellence in the construction of exquisite island resorts. It
                  started off as an exclusive resort builder in the Republic of
                  Maldives – the tourist paradise
                </p>
                <p className="text-[#575757] mt-10">
                  HRC is led from the top by a young and vibrant management team
                  headed by Mr. Mohamed Ali Janah, who took the baton passed on
                  by his industrious father, and the founder/ chairperson of
                  ASPL - Mr. Ali Hussein, a name renowned and enjoying superior
                  goodwill till date in the Maldives.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="px-11 py-4 rounded-3xl text-[#383838] bg-[#EBEBEB] flex md:ml-auto mt-14 ">
              {" "}
              learn more
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto"></div>
      </section>
    </div>
  );
}
