import React, { ReactNode } from "react";

interface CardLayoutProps {
  children: ReactNode;
}

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <section className="md:h-full flex items-center text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </section>
  );
};

export default CardLayout;
