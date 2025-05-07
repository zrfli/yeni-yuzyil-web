"use client";

import * as React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      base: "hidden"
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 dark:bg-neutral-800/30 group-hover:bg-gray-400 dark:group-hover:bg-neutral-800/60 sm:h-10 sm:w-10"
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    }
  },
};

export function BaseCarousel() {
  return (
    <div className="w-full max-w-screen">
      <Flowbite theme={{ theme: customTheme }}>
          <Carousel slide={false}>
            <div className="relative h-96 w-full" key={index}>
              <Image src="/1.webp" fill alt="" priority={false} style={{ objectFit: "cover" }} />
            </div>
            <div className="relative h-96 w-full" key={index}>
              <Image src="/2.webp" fill alt="" priority={false} style={{ objectFit: "cover" }} />
            </div>
            <div className="relative h-96 w-full" key={index}>
              <Image src="/3.webp" fill alt="" priority={false} style={{ objectFit: "cover" }} />
            </div>
          </Carousel>
        </Flowbite>
    </div>
  );
}