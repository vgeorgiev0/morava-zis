import React from "react";
import { MdOutlinePlace, MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const aboutInfo = [
    {
      title: t("address"),
      icon: <MdOutlinePlace />,
      description: t("addressDesc"),
      info: "https://www.google.com/maps/place/Restoran+%C5%BDIS/@43.3877598,21.7627089,14z/data=!4m15!1m7!3m6!1s0x4755c99c33def2eb:0x9e67a37fc410aefd!2zTWV6Z3JhamEsINCh0YrRgNCx0LjRjw!3b1!8m2!3d43.3963872!4d21.7846362!3m6!1s0x4755c99ce220e257:0x7b56374b227c81f3!8m2!3d43.3927307!4d21.7826271!9m1!1b1",
    },
    {
      title: t("phone"),
      icon: <MdOutlinePhone />,
      description: "+381 69 1797 316",
      info: "tel:+381-691-797-316",
    },
    {
      title: t("email"),
      icon: <MdOutlineEmail />,
      description: `slobodan.
      zivadinovic
      @gmail.com`,
      info: "mailto:slobodan.zivadinovic@gmail.com",
    },
  ];

  return (
    <footer className="bg-slate-800 text-white shadow-xl w-full text-left font-bold text-base px-14 py-4">
      <h1 className="text-center font-extrabold text-2xl pb-4">About us</h1>
      <div className="bg-white w-full h-0.5 rounded-full self-center" />
      <div className="flex justify-around gap-10 pt-6">
        {aboutInfo.map((item, index) => {
          return (
            <article
              key={index}
              className={`flex flex-col items-center gap-2 md:ml-16 ${
                locale === "en" ? "md:ml-0" : ""
              }`}
            >
              <h6 className="text-lg select-none">{item.title}</h6>
              <a
                className="hover:opacity-100 opacity-80 hover:text-lg transition-all duration-500"
                target="_blank"
                rel="noopener noreferrer"
                href={item.info}
              >
                <div className="items-center justify-center flex mb-1 hover:text-3xl text-2xl transition-all duration-500">
                  {item.icon}
                </div>
                {item.description}
              </a>
            </article>
          );
        })}
      </div>
      <div>{/* V1rt */}</div>
    </footer>
  );
};

export default Footer;

