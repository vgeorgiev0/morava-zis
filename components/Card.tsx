import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
  imageSrc: StaticImageData;
  title?: string;
  description?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  children,
  description,
  title,
}) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:opacity-95 transition-all duration-500">
        <Image
          width={1400}
          height={800}
          className="lg:h-72 md:h-48 w-full object-cover object-center"
          src={imageSrc}
          alt="blog"
        />
        <div className="p-6 hover:bg-indigo-700 hover:bg-opacity-90 hover:text-white transition duration-300 ease-in">
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
