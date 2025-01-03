import DotPattern from "@/components/ui/dot-pattern";
import {cn} from "@/lib/utils";
import React from "react";
import Image from "next/image";
import HeroSectionImage from "@/constants/images";

export default function Home() {
    return (<section
            className="relative h-[500px] overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div
                className="w-full z-10 h-full md:grid grid-cols-2 content-center max-w-screen-lg mx-auto mt-24 md:mt-0">
                <div className="col-span-1 flex flex-col justify-center items-center mx-4">
                        <h1 className="z-10 whitespace-pre-wrap text-left text-xl w-full font-bold tracking-wide font-mono text-gray-500 dark:text-white">Hi
                            &#33;</h1>
                        <h1 className="z-10 whitespace-pre-wrap text-left text-4xl w-full font-extrabold tracking-wide text-titleColor font-mono dark:text-white">I'm
                            Mueed</h1>
                        <h1 className="z-10 whitespace-pre-wrap text-xl text-left w-full font-bold font-mono tracking-wide text-gray-400 dark:text-white">I'm
                            a <span className="text-gray-500">Full Stack</span> Developer</h1>
                        <p className="z-10 whitespace-pre-wrap text-left text-lg w-full font-mono tracking-wide mt-6 text-gray-400 dark:text-white">I specialized in developing scalable backend services.</p>
                </div>
                <div className="col-span-1 w-full h-full flex items-center justify-center pb-40 md:pb-0">
                    <Image src={HeroSectionImage} alt='Hero Section Image'
                           className="lg:size-80 md:size-64 size-44 z-10"/>
                </div>
            </div>

            <DotPattern
                className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",)}
            />
        </section>);
}
