"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SimpleFooterWithFourGrids() {
  const technology = [
    
    {
      title: "IOTA",
      href: "https://www.iota.org/",
    },
    
    {
      title: "Google Play Integrity API",
      href: "https://developer.android.com/google/play/integrity",
    },
    {
      title: "Google Confidential VM",
      href: "https://cloud.google.com/confidential-computing/confidential-vm/docs/confidential-vm-overview",
    },
  ];

  const features = [
    {
      title: "Proof-Of-Real-Device",
      href: "#proof-of-real-device",
    },
    {
      title: "Proof-Of-Real-Image",
      href: "#proof-of-real-image",
    },
    {
      title: "Public Verification",
      href: "#verification-process",
    },
    {
      title: "Verification",
      href: "#verification-process",
    },
  ];
  
  const contact = [
    {
      title: "GitHub",
      href: "https://github.com/YumeProof",
    },
    
    {
      title: "Contact Email",
      href: "#team",
    },
  ];
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-4 sm:px-8 py-12 sm:py-16 md:py-20 bg-neutral-950 w-full relative overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto text-sm text-neutral-300 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start md:px-8 w-full">
        <div className="w-full sm:w-auto mb-8 sm:mb-0 text-center sm:text-left">
          <div className="mr-0 md:mr-4 flex mb-4 justify-center sm:justify-start w-full">
            <Logo />
          </div>

          <div className="mt-2 ml-0 sm:ml-2 text-neutral-400 max-w-xs text-xs sm:text-sm text-center sm:text-left mx-auto sm:mx-0">
            Proof-of-Concept Android Application for Image Verification
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 items-center sm:items-start w-full sm:w-auto">
          <div className="flex justify-center sm:justify-start space-y-3 sm:space-y-4 flex-col w-full">
            <p className="transition-colors text-white font-bold text-sm sm:text-base text-center sm:text-left">
              Technology
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-3 sm:space-y-4 text-center sm:text-left">
              {technology.map((item, idx) => (
                <li key={"technology" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb] text-xs sm:text-sm"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center sm:justify-start space-y-3 sm:space-y-4 flex-col">
            <p className="transition-colors text-white font-bold text-sm sm:text-base text-center sm:text-left">
              Features
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-3 sm:space-y-4 text-center sm:text-left">
              {features.map((item, idx) => (
                <li key={"features" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb] text-xs sm:text-sm"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center sm:justify-start space-y-3 sm:space-y-4 flex-col">
            <p className="transition-colors text-white font-bold text-sm sm:text-base text-center sm:text-left">
              Contact
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-3 sm:space-y-4 text-center sm:text-left">
              {contact.map((item, idx) => (
                <li key={"contact" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb] text-xs sm:text-sm"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center mt-12 sm:mt-16 md:mt-20 text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-900 inset-x-0 px-4 sm:px-0">
        YumeProof
      </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-0 sm:mr-4 text-white px-2 py-1 relative z-20"
    >
      <span className="font-bold text-xl sm:text-2xl text-white">YumeProof</span>
    </Link>
  );
};