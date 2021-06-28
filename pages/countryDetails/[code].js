import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";


import axios from "axios";

const Details = () => {
  const router = useRouter();

  // const borderCountriesArr = single.borders;

  // const borderCountries = borderCountriesArr.map((country) =>
  //   All.find((obj) => obj.alpha3Code === country)
  // );

  // Get All Countrries
  const [AllCountries, setAllCountries] = useState(null);
  const AllCountry = async () => {
    const data = (await axios.get("https://restcountries.eu/rest/v2/all")).data;
    setAllCountries(data);
  };
  const { code } = router.query;

  // Get Selected Country Countrries
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    AllCountry();
    try {
      const Country = async () => {
        const data = await (
          await axios.get(
            `https://restcountries.eu/rest/v2/alpha/${
              code !== undefined ? code : "AFG"
            }`
          )
        ).data;
        setSelectedCountry(data);
      };
      Country();
    } catch (error) {
      console.log(error);
    }
  }, [code]);

  const borderCountriesArr = selectedCountry?.borders;

  const borderCountries = borderCountriesArr?.map((country) =>
    AllCountries?.find((obj) => obj.alpha3Code === country)
  );
  // const ArrOFCountry = borderCountries.map((name) => name.name);

  return (
    <div className="bg-[#fafafa] dark:bg-[#202c37] h-screen  antialiased my-3 pt-9 mt-[-40px] z-50 text-[#111517] dark:text-[#ffffff]">
      <div className="container sm:mx-auto bg-[#fafafa]  dark:bg-[#202c37]">
        <div
          className="bg-white dark:bg-[#202c37] shadow-lg cursor-pointer filter drop-shadow-sm px-5 ml-8 mt-10 py-2 w-[8rem] flex justify-between rounded-md "
          onClick={() => router.push(`/`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <p className="mr-4">Back</p>
        </div>
        <div className="antialiased sm:grid sm:grid-cols-6">
          <div className="col-span-2">
            <div className="flex justify-center items-center mt-20 ">
              <Image
                src={
                  selectedCountry !== null
                    ? selectedCountry?.flag
                    : "/vercel.svg"
                }
                width="330"
                height="250"
                alt="Loading.."
              />
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="mt-10 ml-10">
              <h1 className="text-xl font-bold">{selectedCountry?.name}</h1>
            </div>
            <div className="sm:grid sm:grid-cols-2">
              <div className="mt-6 ml-10">
                <p className="">
                  <span className="font-semibold">Native Name:</span>{" "}
                  {selectedCountry?.nativeName}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Population:</span>{" "}
                  {selectedCountry?.population?.toLocaleString("en-US")}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Region:</span>{" "}
                  {selectedCountry?.region}
                </p>{" "}
                <p className="mt-2">
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {selectedCountry?.subregion}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Capital:</span>{" "}
                  {selectedCountry?.capital}
                </p>
              </div>
              <div className="mt-6 ml-10">
                <p className="">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {selectedCountry?.topLevelDomain}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Currency:</span>{" "}
                  {selectedCountry?.currencies?.map((value) => value.name)}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Language:</span>{" "}
                  {selectedCountry?.languages?.map((language, index) => (
                    <span key={index}>{language.name}, </span>
                  ))}
                </p>{" "}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  mt-6 ml-10 sm:items-center">
              <p className="font-semibold sm:mr-3">Border Countries:</p>
              <div className=" flex flex-row flex-wrap mt-5 sm:mt-1 items-center">
                {borderCountries?.map((name, index) => (
                  <div
                    key={index}
                    className="bg-[#ffffff] dark:bg-[#2b3945] border-2 dark:border-[#2b3945] filter drop-shadow-sm py-2 rounded-sm mr-4 my-2 px-2 text-center"
                  >
                    <p className="">{name.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
