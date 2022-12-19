import React from "react";
import Card from "./Card";
import CardLayout from "./CardLayout";
import serviceWaves from "../assets/svg/servicesWaves.svg";

import Image, { StaticImageData } from "next/image";

export interface Card {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}
interface ServicesProps {
  cards: Card[];
}

const Services: React.FC<ServicesProps> = ({ cards }) => {
  return (
    <div>
      <div className="-z-10  w-full h-full relative rotate-180 -mb-24">
        <Image
          className="w-screen"
          src={serviceWaves}
          alt="waves"
          width={1200}
          height={1000}
        />
      </div>
      <CardLayout>
        {cards.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            imageSrc={card.imageSrc}
            title={card.title}
          />
        ))}
      </CardLayout>
    </div>
  );
};

export default Services;
