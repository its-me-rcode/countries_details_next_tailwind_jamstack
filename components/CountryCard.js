import Image from "next/image";
import { useRouter } from 'next/router'
import React from "react";

const CountryCard = ({ all }) => {
  const router = useRouter()
  return (
    <div className="  antialiased my-3 z-50 text-[#111517] dark:text-[#ffffff]">
      <div className="container sm:mx-auto grid sm:grid-cols-4   justify-center items-center  ">
        {all.map((country) => (
          <div
            className="bg-[#ffffff] bg-opacity-100 w-[18rem] shadow-md rounded-lg mb-14 sm:m-3 cursor-pointer  "
            key={country.name}
            onClick={() => router.push(`./countryDetails/${country.alpha3Code}`)}
          >
            <Image
              src={country.flag}
              alt="sdf"
              width="350"
              height="200vh"
              className="object-cover rounded-t-lg "
            />
            <div className="mx-6 my-3 mb-14">
              <h1 className="text-xl my-3 font-bold">{country.name}</h1>
              <p className="">
                <span className="text-base font-semibold">Population:</span>{" "}
                <span>{country.population.toLocaleString("en-US")}</span>
              </p>
              <p className="">
                <span className="text-base font-semibold">Rigion:</span>{" "}
                {country.region}
              </p>
              <p className="">
                <span className="text-base font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
