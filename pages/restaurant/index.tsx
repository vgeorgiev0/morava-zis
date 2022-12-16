import Banner from "components/Banner";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

interface RestaurantProps {
  _nextI18Next: {
    initialLocale: string;
  };
}

const Restaurant: React.FC<RestaurantProps> = ({ _nextI18Next }) => {
  const [locale, setLocale] = useState<string>();

  useEffect(() => {
    setLocale(_nextI18Next.initialLocale);
  }, [_nextI18Next.initialLocale]);

  const { t } = useTranslation("common");
  return (
    <div>
      <div className="-mt-24 mb-6">
        <Banner
          heroType="bg-restaurantHero"
          title={t("restaurantTitle")}
          subtitle={t("restaurantDescription")}
        >
          <Link locale={locale} href="/contact" className="btn-primary">
            <button className="capitalize tracking-widest">{t("about")}</button>
          </Link>
        </Banner>
      </div>
      <Card imageSrc={cardImage} />
    </div>
  );
};

export default Restaurant;
