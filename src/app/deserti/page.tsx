"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Deserti = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("deserti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("trilece")}</p>
            <b className="basis-1/12 text-right">70</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12 text-orange-600">{t("kolacNaDenot")}</p>
            <b className="basis-1/12 text-right text-orange-600">80</b>
            <b className="ml-1 text-orange-600">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12 whitespace-pre-line">
              {t("palacinkaKremBananaBiskvitaSlag")}
            </p>
            <b className="basis-1/12 text-right">120</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("palacinkaMedOrevi")}</p>
            <b className="basis-1/12 text-right">120</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("ovosnaVafla")}</p>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("nutelaVafla")}</p>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("kombiniranaVafla")}</p>
            <b className="basis-1/12 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <b>{t("napomena1")}</b>
        <p className="whitespace-pre-line">{t("napomena2")}</p>
      </div>
    </div>
  );
};

export default Deserti;
