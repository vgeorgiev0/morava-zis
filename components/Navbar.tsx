import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { locale, locales, push } = useRouter();

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  const handleLocaleChange = (locale?: string) => {
    push(`/`, undefined, { locale });
  };

  const home = "home";
  const apartments = "apartments";
  const contact = "about";
  const restaurant = "introRestaurant";

  return (
    <nav>
      <div className="mx-4 my-2 ">
        <div className="flex flex-row">
          <Link className="flex-1" locale={locale} href={"/"} onClick={scroll}>
            <Image
              width={88}
              height={60}
              className="w-auto h-auto flex-1"
              priority={true}
              alt="logo"
              src={logo}
            />
          </Link>
          <div className="flex-1 flex-row gap-4 hidden md:flex">
            <button>home</button>
            <button>apartments</button>
            <button>restaurant</button>
            <button>contact us</button>
          </div>
          <button className="sm:inline md:hidden">
            <FaAlignRight />
          </button>
        </div>
      </div>
      <div className="flex gap-3 justify-end mx-8">
        {locales?.map((locale) => (
          <Link
            href={"/"}
            locale={locale}
            onClick={() => handleLocaleChange(locale)}
            key={locale}
          >
            {locale}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
