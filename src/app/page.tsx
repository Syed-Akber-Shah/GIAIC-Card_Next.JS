import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">
          {/*Background Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300 px]">
              <Image
                src="/images/background.png"
                alt="background image"
                width={350}
                height={250}
                objectFit="cover"
                className="opacity-15 mt-[97px] mb-[10px]"
              />
            </div>
          </div>

          {/*Left Section */}
          <div className="w-2/3 pr-4 pt-16 relative z-10">
          
           {/*Logo Section */}
           <img src="/images/Logo.png" alt="card logo" className="absolute top-[-18px] left-0 w-16 h-18 z-10" />

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Name: </strong>
              </span>
              <span className="text-black"><strong>Syed Akber Shah</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Roll No: </strong>
              </span>
              <span className="text-black"><strong>00096363</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Distance Learning: </strong>
              </span>
              <span className="text-black"><strong>No</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>City: </strong>
              </span>
              <span className="text-black"><strong>Karachi</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Center: </strong>
              </span>
              <span className="text-black"><strong>Governor House Karachi</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Campus: </strong>
              </span>
              <span className="text-black"><strong>Main</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Days/Time: </strong>
              </span>
              <span className="text-black"><strong>Sunday - 02:00PM - 05:00PM</strong></span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                <strong>Batch: </strong>
              </span>
              <span className="text-black"><strong>1</strong></span>
            </p>

            {/*Button Section */}
            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 border border-gray-300 text-white bg-blue-900 rounded-lg flex-col justify-center items-center flex">
                <span
                  className="absolute inset-0 bg-slate-500 -ml-6"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10">Q1 & WMD</span>
              </button>
            </div>
          </div>

           {/*Right Section */}
           <div className="w-1/6 text-center relative z-10">
           <Image 
           src="/images/syed-akber-photo.jpg"
           alt="profile picture"
           width={800}
           height={800}
           className="mb-20 -mt-20 w-fit border border-sky-500"
           />

           <p className="border-t-2 border-t-sky-500 pt-2 font-bold text-sky-500 mt-10 text-xl">Authorized Signature</p>
        </div>
        
      </div>
    </div>
    </div>
  );
}
