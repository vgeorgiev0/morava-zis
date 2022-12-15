import Link from "next/link";
import React, { useEffect } from "react";
import { Content, Apartments } from "../../types/Content";

const spaceID = process.env.NEXT_PUBLIC_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
  );
  const data: Content = await res.json();

  const apartments = data.items;

  return {
    props: { apartments },
  };
};

interface ApartmentProps {
  apartments: Apartments[];
}

const Apartments: React.FC<ApartmentProps> = ({ apartments }) => {
  const spaceID = process.env.NEXT_PUBLIC_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://cdn.contentful.com/spaces/${spaceID}/environments/master/entries?access_token=${accessToken}`
      ).then((res) => res.json());
    };
    fetchData();
  }, [accessToken, spaceID]);

  return (
    <div>
      {apartments.map((apartment) => (
        <a
          style={{ margin: "20px" }}
          href={`/apartments/${apartment.fields.name}`}
          key={apartment.sys.id}
        >
          {apartment.fields.name}
        </a>
      ))}
    </div>
  );
};

export default Apartments;
