"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Pici = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="pt-3 pl-3" />
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("pici")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("margarita")}</b>
            <b className="basis-1/12 text-right">230/450</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/4">{t("margaritaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kapricioza")}</b>
            <b className="basis-1/12 text-right">280/550</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("kapriciozaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase whitespace-pre-line">
              {t("picaSuvomesnata")}
            </b>
            <b className="basis-1/12 text-right">300/600</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("picaSuvomesnataDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kombiniranaPica")}</b>
            <b className="basis-1/12 text-right">350/700</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("kombiniranaPicaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("fungi")}</b>
            <b className="basis-1/12 text-right">280/550</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("fungiDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijanaPica")}</b>
            <b className="basis-1/12 text-right">280/550</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("vegetarijanaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kalcone")}</b>
            <b className="basis-1/12 text-right">300</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("kalconeDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaStek")}</b>
            <b className="basis-1/12 text-right">300/600</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("picaStekDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaTuna")}</b>
            <b className="basis-1/12 text-right">300/600</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("picaTunaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kvatroFormadzi")}</b>
            <b className="basis-1/12 text-right">350/700</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("kvatroFormadziDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaPrsuta")}</b>
            <b className="basis-1/12 text-right">400/800</b>
            <b className="ml-1">{t("mkd")}</b>
          </div>
          <div className="flex">
            <small className="basis-3/5">{t("picaPrsutaDesc")}</small>
          </div>
        </div>
        <h2 className="text-center pt-1 text-xl text-orange-600 font-bold uppercase">
          {t("suvomesnato")}
        </h2>
        <h3 className="text-center pt-1 pb-4 font-bold">
          {t("suvomesnatoLista")}
        </h3>
        <div className="pb-5">
          <div>
            <b className="basis-11/12 uppercase">- {t("pileskaSunka")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskiVrat")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("slanina")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("pileskoFile")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskiKulen")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("govedskiKulen")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("govedskoFile")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskaPecenica")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pici;
