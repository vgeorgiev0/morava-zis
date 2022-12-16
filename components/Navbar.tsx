import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { locale, locales, push, asPath } = useRouter();

  const { t } = useTranslation("navigation");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };


  const handleLocaleChange = (locale?: string) => {
    push(`${asPath}`, undefined, { locale });
  };

  return (
    <nav
      className={` flex justify-evenly  sticky w-full top-0 left-0 bg-white rounded-b-full rounded-tl-full transition-all duration-300  drop-shadow-2xl ${
        isOpen ? "h-54 rounded-tl-3xl rounded-bl-full rounded-br-3xl mt-1" : ""
      }`}
    >
      <div className="flex flex-row flex-1 gap-10 px-4 md:pl-10">
        <div className="flex flex-1 py-1">
          <Link className="mt-2" locale={locale} href={"/"} onClick={scroll}>
            <Image
              width={65}
              height={60}
              className="w-14 h-16 md:w-16 md:h-20  flex-1 hover:opacity-80 transition-all duration-500"
              priority={true}
              alt="logo"
              src={logo}
            />
          </Link>
        </div>
        <div className="flex flex-2 mr-4 flex-col transition-all duration-500">
          <div
            className={` flex  sm:flex-row flex-col transition-all duration-500 ${
              isOpen ? " flex-col " : "hidden md:flex"
            }`}
          >
            <Link
              className="navLink"
              href={"/"}
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              className="navLink"
              href={"/apartments"}
              onClick={() => setIsOpen(false)}
            >
              {t("apartments")}
            </Link>
            <Link
              className="navLink"
              href={"/restaurant"}
              onClick={() => setIsOpen(false)}
            >
              {t("introRestaurant")}
            </Link>
            <Link
              className="navLink"
              href={"/contact"}
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
          </div>
          <div className="flex flex-1 gap-1 justify-end pt-6 md:pt-0  ">
            {locales?.map((locale) => (
              <Link
                className={`localeButton ${
                  locale === "bg"
                    ? "hover:from-white hover:via-green-600 hover:to-red-600 "
                    : locale === "rs"
                    ? "hover:from-blue-700 hover:via-white hover:to-red-600 "
                    : locale === "en"
                    ? "hover:from-red-600 hover:via-blue-600 hover:to-white "
                    : ""
                }`}
                href={`${asPath}`}
                locale={locale}
                onClick={() => {
                  handleLocaleChange(locale);
                }}
                key={locale}
              >
                {locale}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-self-end ">
          <button className="inline md:hidden  " onClick={handleToggle}>
            <FaAlignRight className="hover:text-orange-400 text-amber-900 w-full h-full " />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
