"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Sirenje = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("sirenje")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kravjoSirenje")}</b>
            <b className="basis-1/12 text-right">180</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("kravjoSirenjeDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("ovcoSirenje")}</b>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("ovcoSirenjeDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("bienoNaSkara")}</b>
            <b className="basis-1/12 text-right">220</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("bienoNaSkaraDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("rolovanoSirenje")}</b>
            <b className="basis-1/12 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("rolovanoSirenjeDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("topenoSirenje1")}</b>
            <b className="basis-1/12 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("topenoSirenje1Desc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("topenoSirenje2")}</b>
            <b className="basis-1/12 text-right">280</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("topenoSirenje2Desc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("plavoSirenje")}</b>
            <b className="basis-1/12 text-right">350</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("plavoSirenjeDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sirenje;
