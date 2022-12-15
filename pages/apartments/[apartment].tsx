import { GetStaticProps } from "next";
import React from "react";
import { Apartments, Content } from "../../types/Content";

const spaceID = process.env.NEXT_PUBLIC_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();

  const apartment = data.items?.filter((apartments) => {
    return apartments.fields.name === context?.params?.apartment;
  });

  return {
    props: { apartment },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();
  const paths = data.items?.map((room) => {
    return {
      params: { apartment: room.fields.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface ApartmentProps {
  apartment: Apartments[];
}

const Apartment: React.FC<ApartmentProps> = ({ apartment }) => {
  return (
    <div color="white">
      <h1>{apartment[0].fields.name}</h1>
    </div>
  );
};

export default Apartment;
