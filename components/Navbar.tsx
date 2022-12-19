import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  return (
    <nav
      className={`sticky z-10 flex justify-evenly w-full top-0 left-0 ease-in-out bg-white rounded-b-full rounded-tl-full transition-all duration-300  drop-shadow-2xl ${
        isOpen ? " rounded-tl-3xl rounded-tr-3xl mt-1 rounded-b-none " : ""
      }`}
    >
      <div className="flex flex-row flex-1 gap-10 px-4 md:pl-10">
        <div className="flex flex-1 py-1">
          <Link className="mt-2" locale={locale} href={"/"} onClick={scroll}>
            <Image
              width={800}
              height={600}
              className="w-14 h-16 md:w-16 md:h-20  flex-1 hover:opacity-80 transition-all duration-500"
              priority={true}
              alt="logo"
              src={logo}
            />
          </Link>
        </div>
        <div className="flex flex-2 mr-4 flex-col transition-all duration-500">
          <div
            className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400px] transition-all ease-in-out duration-500 rounded-bl-full  ${
              isOpen ? "top-20 opacity-100" : "opacity-0"
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
          <div className="flex flex-1 gap-2 justify-end pt-6 md:pt-0 -mr-10 md:-mr-2  ">
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
        <div className="flex justify-self-end items-center pb-2 pl-10">
          {/* <button className="inline md:hidden  " onClick={handleToggle}> */}
          <FaAlignRight
            className="hover:text-orange-400 active:text-orange-300 text-amber-900 w-8 h-5 inline md:hidden  "
            onClick={handleToggle}
          />
          {/* </button> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
