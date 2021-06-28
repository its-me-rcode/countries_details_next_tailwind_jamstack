import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import single from "../../data/single.json"

const Details = () => {
    const router = useRouter();
    const { code } = router.query;
    
    return (
      <div className="sm:max-w-[1440px] antialiased my-3 z-50 text-[#111517] dark:text-[#ffffff]">
        <div className="container sm:mx-auto">
          <div className="bg-white shadow-lg cursor-pointer filter drop-shadow-sm px-5 ml-8 mt-10 py-2 w-[8rem] flex justify-between rounded-md">
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
                <div className="flex justify-center items-center mt-20 ">
                    <Image  src={single.flag} width="330" height="250"  alt="country image"/>
                </div>

                <div className="mt-10 ml-10">
                    <h1 className="">{single.name }</h1>
                </div>
        </div>
      </div>
    );
}

export default Details
