import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  const home = "home";
  const apartments = "apartments";
  const contact = "about";
  const restaurant = "introRestaurant";

  return (
    <nav>
      <div></div>
    </nav>
  );
};
export default Navbar;
