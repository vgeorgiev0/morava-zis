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

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
