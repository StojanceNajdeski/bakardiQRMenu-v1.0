"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Meze = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("meze")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sampinjoni200")}</b>
            <b className="basis-1/12 text-right">200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sampinjoniKaskaval")}</b>
            <b className="basis-1/12 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskiKrilca")}</b>
            <b className="basis-1/12 text-right">800</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskiStek")}</b>
            <b className="basis-1/12 text-right">700</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pomfrit300")}</b>
            <b className="basis-1/12 text-right">100/160</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <small>{t("pomfrit300Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("spajsiKompir300")}</b>
            <b className="basis-1/12 text-right">120/180</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <small>{t("spajsiKompir300Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("solenaPalacinka")}</b>
            <b className="basis-1/12 text-right">120</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <small>{t("solenaPalacinkaDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Meze;
