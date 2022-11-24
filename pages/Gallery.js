import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto md:pt-52">
        <div className="flex justify-center border-b-4">
          <h className="text-5xl text-white pb-3">In the gallery</h>
        </div>

        <section class="overflow-hidden text-gray-700">
          <div class=" px-5 py-2  lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap-reverse ">
                <div class="w-1/2 p-1 md:p-2 relative">
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl "
                    src="img/headerbg2.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-16 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                </div>
                <div class="w-1/2 p-1 md:p-2 relative">
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl  "
                    src="img/headerbg.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-6 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                  <div class="w-7/8 p-1 md:p-2 relative mt-2">
                    {" "}
                    <img
                      className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl  "
                      src="img/headerbg.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-6 px-4 text-lg text-white">
                      <p>Opening of Extreme Park in Maldives</p>
                    </div>
                  </div>
                </div>
                <div class="w-full p-1 md:p-2 relative">
                  {" "}
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  rounded-2xl "
                    src="img/headerbg3.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-6 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap w-2/2">
                <div class="w-full p-1 md:p-2 relative">
                  {" "}
                  <img
                    className=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl "
                    src="img/headerbg3.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-6 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                </div>
                <div class="w-1/2 p-1 md:p-2 relative">
                  {" "}
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl  "
                    src="img/headerbg2.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-16 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                </div>
                <div class="w-1/2 p-1 md:p-2 relative">
                  {" "}
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl  "
                    src="img/headerbg.jpg"
                    alt=""
                  />
                  <img
                    className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-2xl mt-5  "
                    src="img/headerbg.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-6 px-4 text-lg text-white">
                    <p>Opening of Extreme Park in Maldives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="ml-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
