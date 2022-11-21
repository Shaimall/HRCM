import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import About from "../components/About";
import { Card, Card2 } from "../components/Cards";

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
          <div className="md:block hidden ">
            <About />
          </div>
        </div>
      </header>
      <section className=" bg-[#F8F8F8]">
        <div className="container mx-auto md:pt-80  ">
          <div className="md:hidden block ">
            <About />
          </div>
          <h className="text-[#383838] text-5xl px-3  ">About Us.</h>
          <div className="md:border-t-8 border-t-4 mt-10 px-3 ">
            <div className=" grid md:grid-cols-12 grid-cols-2 gap-y-4 mt-20 ">
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
          <div className="mx-auto">
            <button className="px-11 py-4 rounded-3xl text-[#383838] bg-[#EBEBEB] md:flex md:ml-auto mt-14 ">
              {" "}
              learn more
            </button>
          </div>
        </div>
      </section>
      <section className="pt-40 bg-[#F8F8F8]">
        <div className="container mx-auto px-5 md:px-0">
          <h className="text-5xl text-[#770A12] font-semibold leading-normal">
            Projects that we have undertaken.
          </h>
          <div className=" grid grid-cols-5 lg:gap-52 md:gap-36 md:mt-36">
            <a className="text-xl text-[#383838] hover:text-[#770A12] ">All</a>
            <a className="text-xl text-[#383838] hover:text-[#770A12] ">
              Resorts
            </a>
            <a className="text-xl text-[#383838] hover:text-[#770A12] ">
              Hotels
            </a>
            <a className="text-xl text-[#383838] hover:text-[#770A12] ">
              Residentials
            </a>
            <a className="text-xl text-[#383838] hover:text-[#770A12] ">Csr</a>
          </div>
          <div className="grid md:grid-cols-3 gap-3 container md:mt-12 mx-auto md:gap-y-14">
            {CARD.map((item, i) => (
              <Card {...item} key={i} />
            ))}
          </div>
          <div className="mx-auto mb-36 ">
            <button className="px-11 py-4 rounded-3xl text-[#383838] bg-[#EBEBEB] md:flex md:ml-auto mt-14 ">
              {" "}
              View more
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8]">
        <div className="container mx-auto bg-[#EBEBEB]">
          <div className=" px-16 py-12">
            <h className="text-[#C4C4C4] text-5xl">Testimonials.</h>
            <div className="flex justify-center mt-36">
              <div className=" bg-white w-20 h-20 rounded-full"></div>
            </div>
            <div className="flex- justify-center text-center mt-11">
              <p className="text-[#383838]">
                Leo Ting Ping Ronald<br></br> CEO of Keong Hong Holdings
              </p>
            </div>
            <div className="flex- justify-center text-center mt-7">
              <p className="text-[#383838]">
                This hotel (Mercure Kooddoo) is truly unique and as you know it
                was the <br></br> brainchild of my good friend of more than 14
                years, Mr. Mohamed Ali Janah
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 bg-[#F8F8F8]">
        <div className="container mx-auto px-2">
          <h className="text-5xl text-[#770A12]">In the gallery</h>
          <div className="grid md:grid-cols-10 md:gap-2 mt-24 ">
            <div className="md:col-span-8  relative">
              <img
                className="w-full md:h-[512px]"
                src="img/cards1.png"
                alt=""
              />

              <div className="absolute md:bottom-14 md:left-10  bottom-5 left-2">
                <p className="text-[#F8F8F8] text-sm">18 September 2021</p>
                <p className="text-[#F8F8F8] mt-3 ">
                  Opening of Extreme Park in Maldives
                </p>
              </div>
            </div>
            <div className="md:col-span-2 ">
              <div className="relative mt-1">
                <img
                  className=" md:h-[168px] w-full "
                  src="img/cards1.png"
                  alt=""
                />
                <div className="absolute bottom-5 left-2">
                  <p className="text-[#F8F8F8] text-sm">18 September 2021</p>
                  <p className="text-[#F8F8F8] mt-3 ">
                    Opening of Extreme Park in <br></br> Maldives
                  </p>
                </div>
              </div>
              <div className="relative mt-1">
                <img
                  className=" md:h-[168px] w-full "
                  src="img/cards1.png"
                  alt=""
                />
                <div className="absolute bottom-5 left-2">
                  <p className="text-[#F8F8F8] text-sm">18 September 2021</p>
                  <p className="text-[#F8F8F8] mt-3 ">
                    Opening of Extreme Park in <br></br> Maldives
                  </p>
                </div>
              </div>
              <div className="relative mt-1">
                <img
                  className=" md:h-[168px] w-full "
                  src="img/cards1.png"
                  alt=""
                />
                <div className="absolute bottom-5 left-2">
                  <p className="text-[#F8F8F8] text-sm">18 September 2021</p>
                  <p className="text-[#F8F8F8] mt-3 ">
                    Opening of Extreme Park in <br></br> Maldives
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto  ">
            <button className="px-11 py-4 rounded-3xl text-[#383838] bg-[#EBEBEB] md:flex md:ml-auto mt-14 ">
              {" "}
              View more
            </button>
          </div>
        </div>
      </section>
      <section className="pt-40 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <h className="text-[#770A12] text-5xl flex justify-center md:flex-none md:justify-start">
            In the News
          </h>

          <div className="grid md:grid-cols-4 gap-y-8 container md:mt-12  md:gap-y-14 ">
            {CARD2.map((item, i) => (
              <Card2 {...item} key={i} />
            ))}
          </div>
          <div className="mx-auto  ">
            <button className="px-11 py-4 rounded-3xl text-[#383838] bg-[#EBEBEB] md:flex md:ml-auto mt-14 ">
              {" "}
              View more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const CARD = [
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "GA. KOODDOO AIRPORT",
    description:
      "Kooddoo Airport was initially launched in 2012. It has now been upgraded and re-opened in 2017 with an extended runway.",

    href: "#",
  },
];

const CARD2 = [
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "18 September 2021",
    description:
      "chairman mr. mohamed ali janah appointed to newly created “maldives building & construction board”",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "18 September 2021",
    description: "mvr 444 million to diversify tourism growth",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "18 September 2021",
    description: "ifawpca 2020 maldives convention countdown launched",

    href: "#",
  },
  {
    image: <img className="w-full" src="img/cards1.png" alt="" />,

    title: "18 September 2021",
    description: "ifawpca 2020 maldives convention countdown launched",

    href: "#",
  },
];
