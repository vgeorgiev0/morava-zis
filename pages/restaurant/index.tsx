import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Card from "../../components/Card";
import cardImage from "../../public/images/img4.jpg";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "navigation",
      ])),
    },
  };
};

const Restaurant = () => {
  return (
    <div>
      <Card imageSrc={cardImage} />
    </div>
  );
};

export default Restaurant;
