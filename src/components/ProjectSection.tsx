import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import HeroSectionImage from "@/constants/images";

const ProjectSection = () => {
    return (
        <section className="mx-2" id="projects">
            <h1 className="font-mono m-2 text-xl md:text-3xl lg:text-2xl text-titleColor font-bold ">
                My Projects
            </h1>
            <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
                <Card className="w-full h-full row-span-2 col-span-2">
                    <CardHeader>
                        <AspectRatio ratio={16 / 9} className="bg-muted">
                            <Image
                                src={HeroSectionImage}
                                alt="Byte Blog"
                                fill
                                className="h-full w-full rounded-lg object-cover"
                            />
                        </AspectRatio>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CardTitle>Byte Blog</CardTitle>
                        <CardDescription>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et modi
                            quibusdam tempora ratione, mollitia hic consectetur sunt dolorem
                            cupiditate eaque aperiam repellat quos excepturi facere dolores ex
                            pariatur officiis! Ex.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="grid grid-cols-6 items-center gap-2">
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            TailwindCss
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            NextJS
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            FastAPI
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            PostgreSQL
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            JWT
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            Python
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            TypeScript
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            ShadCN
                        </Badge>
                        <Badge
                            className="cursor-pointer flex items-center justify-center"
                            variant="outline"
                        >
                            MagicUI
                        </Badge>
                    </CardFooter>
                </Card>
                <div className="h-64 border border-blue-400"></div>
                <div className="h-64 border border-blue-400"></div>
                <div className="h-64 border border-blue-400"></div>
                <div className="h-64 border border-blue-400"></div>
                <div className="h-64 border border-blue-400"></div>
            </div>
        </section>
    );
};

export default ProjectSection;
