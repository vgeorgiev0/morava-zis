import React, { HTMLAttributes, ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ children, subtitle, title }) => {
  return (
    <div className="bg-mainHero bg-no-repeat bg-cover w-full h-screen  items-center flex ">
      <div className="inline-block bg-black bg-opacity-60  w-full">
        <div className=" text-white px-8 py-4 text-center opacity-100 tracking-widest w-full">
          <h1 className="text-3xl md:text-7xl ">{title}</h1>
          <div className="w-40 h-1 bg-yellow-500 my-7 mx-auto" />
          <p className="text-xl mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
