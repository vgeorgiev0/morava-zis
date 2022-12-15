import { GetStaticProps } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Content, Apartments } from "../../types/Content";

const spaceID = process.env.NEXT_PUBLIC_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();

  const apartments = data.items;

  return {
    props: {
      apartments,
      locale,
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "navigation",
      ])),
    },
  };
};

interface ApartmentProps {
  apartments: Apartments[];
  locale: string;
}

const Apartments: React.FC<ApartmentProps> = ({ apartments, locale }) => {
  const { t } = useTranslation();
  return (
    <div>
      {apartments.map((apartment) => (
        <Link
          locale={locale}
          style={{ margin: "20px" }}
          href={`/apartments/${apartment.fields.name}`}
          key={apartment.sys.id}
        >
          {apartment.fields.name}
        </Link>
      ))}
    </div>
  );
};

export default Apartments;
