import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

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
  return <div>Restaurant</div>;
};

export default Restaurant;
