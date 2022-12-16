import React from "react";
import Card from "./Card";
import CardLayout from "./CardLayout";

import { StaticImageData } from "next/image";

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
  );
};

export default Services;
