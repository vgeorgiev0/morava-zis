import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

type Props = {};

const FourOhFour = (props: Props) => {
  return <div>404</div>;
};

export default FourOhFour;
