import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { Apartments, Content } from "../../types/Content";

const spaceID = process.env.NEXT_PUBLIC_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();

  const apartment = data.items?.filter((apartments) => {
    return apartments.fields.name === params?.apartment;
  });

  return {
    props: { apartment, locale, params },
  };
};

export const getStaticPaths = async ({ locales }: any) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();

  let paths: any = [];

  data.items?.forEach((room) => {
    for (const locale of locales) {
      paths.push({
        params: {
          apartment: room.fields.name,
        },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

interface ApartmentProps {
  apartment: Apartments[];
  params?: ParsedUrlQuery;
  locale?: string;
}

const Apartment: React.FC<ApartmentProps> = ({ apartment, locale, params }) => {
  console.log({ apartment, params, locale });
  return (
    <div color="white">
      <h1>{apartment[0].fields.name}</h1>
    </div>
  );
};

export default Apartment;