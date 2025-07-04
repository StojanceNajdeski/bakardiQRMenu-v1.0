"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Novo = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("novo")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("corba")}</b>
            <b className="basis-1/12 text-right">160</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("rizotoTelesko")}</b>
            <b className="basis-1/12 text-right">450</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("svinskoPecenje")}</b>
            <b className="basis-1/12 text-right">400</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("domasniKolbasi")}</b>
            <b className="basis-1/12 text-right">1200</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("sudzuk")}</b>
            <b className="basis-1/12 text-right">1300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novo;
