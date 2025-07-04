"use client";
import Link from "next/link";
import "../../../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Pojadok = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("pojadok")}
        </h2>
        <small className="font-bold">{t("seSluziDo")}</small>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omlet1")}</b>
            <b className="basis-1/12 text-right">170</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("omlet1Desc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omlet2")}</b>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("omlet2Desc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omletVegetarijanski")}</b>
            <b className="basis-1/12 text-right">170</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("omletVegetarijanskiDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omletKombiniran")}</b>
            <b className="basis-1/12 text-right">220</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("omletKombiniranDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("bekendegs")}</b>
            <b className="basis-1/12 text-right">220</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("bekendegsDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("mekica")}</b>
            <b className="basis-1/12 text-right">20</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("mekicaDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pojadok;
