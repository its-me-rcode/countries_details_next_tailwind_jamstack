import Image from "next/image";
import React from "react";

const CountryCard = ({ all }) => {
  return (
    <div className="max-w-[375px] sm:max-w-[1440px] antialiased my-3 z-50">
      <div className="container sm:mx-auto grid sm:grid-cols-4 ml-10  space-x-4 space-y-3  ">
        {all.map((country) => (
          <div className="bg-white" key={country.name}>
            <Image src={country.flag} alt="sdf" width={100} height={100} />
            <h1 className="">{country.name}</h1>
            <p className="">Population:{country.population}</p>
            <p className="">Rigion:{country.region}</p>
            <p className="">Capital:{country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
