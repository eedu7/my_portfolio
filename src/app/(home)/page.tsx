import DotPattern from "@/components/ui/dot-pattern";
import {cn} from "@/lib/utils";
import React from "react";
import Image from "next/image";
import HeroSectionImage from "@/constants/images";

export default function Home() {
  return (
      <section
          className="relative h-[500px] overflow-hidden rounded-lg bg-background md:shadow-xl mt-24 md:mt-0">
          <div className="w-full z-10 h-full md:grid grid-cols-2 content-center max-w-screen-lg mx-auto sm:mt-28 md:mt-0">
              <div className="col-span-1 flex flex-col justify-center items-center">
                  <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">Mueed
                      Ahmad</p>
              </div>
              <div className="grid-cols-1 w-full h-full flex items-center justify-center">
                  <Image src={HeroSectionImage} alt='Hero Section Image' className="lg:size-80 md:size-64 size-44" />
              </div>
          </div>

          <DotPattern
              className={cn(
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
          />
      </section>
  );
}
