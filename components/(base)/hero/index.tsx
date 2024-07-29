"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mb-10">
              <p className="text-3xl font-semibold text-blue-600 dark:text-white">Masmavi Günler</p>
              <p className="text-4xl md:text-[6rem] text-blue-600 font-bold mt-1 leading-none">NeoTech Kampüs</p>
              <p className="text-2xl font-semibold text-blue-600 dark:text-white">10 Temmuz - 2 Ağustos</p>
            </div>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}