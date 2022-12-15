import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.png";
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
      <div>
        <div>
          <Link href={"/"} onClick={scroll}>
            <Image height={177} width={88} alt="logo" src={logo} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
