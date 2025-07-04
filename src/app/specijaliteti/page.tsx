"use client";
import Link from "next/link";
import React from "react";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Specijaliteti = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("specijaliteti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="border-4 border-dotted p-3 rounded-2xl border-orange-600">
          <div className="pb-5">
            <div className="flex">
              <b className="basis-4/5 uppercase">{t("svinskoFurna")}</b>
              <b className="basis-1/5 text-right">1300</b>
              <b className="ml-1">{t("mkd")}</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-4/5 uppercase">{t("teleskoFurna")}</b>
              <b className="basis-1/5 text-right">1800</b>
              <b className="ml-1">{t("mkd")}</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-4/5 uppercase">{t("sharskaPleskavica300")}</b>
              <b className="basis-1/5 text-right">300</b>
              <b className="ml-1">{t("mkd")}</b>
            </div>
          </div>
          <div>
            <div className="flex">
              <b className="basis-4/5 uppercase">{t("sharskaPleskavica400")}</b>
              <b className="basis-1/5 text-right">400</b>
              <b className="ml-1">{t("mkd")}</b>
            </div>
          </div>
        </div>
        <div className="pb-5 mt-4">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("porcijaStek")}</b>
            <b className="basis-1/5 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("porcijaStekDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("pileskaSnicla")}</b>
            <b className="basis-1/5 text-right">250</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("pileskaSniclaDesc")}</small>
          </div>
        </div>
        <h2 className="pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("sosovi")}
        </h2>
        <div className="pb-2 pt-2">
          <div className="flex">
            <p className="basis-4/5">{t("belSos")}</p>
            <b className="basis-1/5 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-4/5">{t("kafeavSos")}</p>
            <b className="basis-1/5 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-4/5">{t("topolKariSos")}</p>
            <b className="basis-1/5 text-right">80</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-4/5">{t("barbikjuSos")}</p>
            <b className="basis-1/5 text-right">100</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
        <div className="pb-5 pt-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("polnetoPilesko")}</b>
            <b className="basis-1/5 text-right">380</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("polnetoPileskoDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("govedskiMuskul")}</b>
            <b className="basis-1/5 text-right">650</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("govedskiMuskulDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("rizotoStek")}</b>
            <b className="basis-1/5 text-right">330</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("rizotoStekDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("vegetarijanskoRizoto")}</b>
            <b className="basis-1/5 text-right">330</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("vegetarijanskoRizotoDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-4/5 uppercase">{t("teleskoBelo")}</b>
            <b className="basis-1/5 text-right">800</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specijaliteti;
