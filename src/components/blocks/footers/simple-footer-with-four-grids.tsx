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
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-300 flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>

          <div className="mt-2 ml-2 text-neutral-400 max-w-xs">
            Proof-of-Concept Android Application for Image Verification
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start mt-10 sm:mt-0 md:mt-0 ml-auto">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors text-white font-bold">
              Technology
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-4">
              {technology.map((item, idx) => (
                <li key={"technology" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors text-white font-bold">
              Features
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-4">
              {features.map((item, idx) => (
                <li key={"features" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors text-white font-bold">
              Contact
            </p>
            <ul className="transition-colors text-neutral-400 list-none space-y-4">
              {contact.map((item, idx) => (
                <li key={"contact" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#5995eb]"
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
      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-900 inset-x-0">
        YumeProof
      </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
    >
      <span className="font-bold text-2xl text-white">YumeProof</span>
    </Link>
  );
};