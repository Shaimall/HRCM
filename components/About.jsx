import React from "react";

const About = () => {
  return (
    <div className="grid md:grid-cols-3 text-center md:text-left py-12 ">
      <div className="flex flex-col gap-8">
        <h className="text-3xl font-bold text-[#C0A05E] md:text-white">
          Exclusive<br></br> Builder
        </h>
        <p className="md:border-t-[17px] border-t-2 border-[#EBEBEB] text-[#383838] text-base pt-2 md:pt-8 w-3/4 mx-auto md:mx-0">
          Exclusively build hotels and resorts. Meaning we are specialized and
          have material and equipment required for such projects.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:mt-0 mt-10">
        <h className="text-3xl font-bold text-[#C0A05E] md:text-white ">
          100% Customer<br></br> Satisfaction Rate
        </h>
        <p className="md:border-t-[17px] border-t-2 border-[#EBEBEB] text-[#383838] text-base pt-2 md:pt-8 w-3/4 mx-auto md:mx-0">
          Although we have completed many projects, each achieved maximum
          customer satisfaction as every little detail is taken care of
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-10 md:mt-0">
        <h className="text-3xl font-bold text-[#C0A05E] md:text-white ">
          Years of<br></br> Experience
        </h>
        <p className="md:border-t-[17px] border-t-2 border-[#EBEBEB] text-[#383838] text-base pt-2 md:pt-8 w-3/4 mx-auto md:mx-0">
          With experience over years we know the procedures, the engineering,
          the trends in design. With our in house design team your resort or
          hotel would be unique and designed to meet your specific demands.
        </p>
      </div>
    </div>
  );
};

export default About;
