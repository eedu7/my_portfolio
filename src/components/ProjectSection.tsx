import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { projects } from "@/constants/projects";

const ProjectSection = () => {
    return (
        <section className="mx-2" id="projects">
            <h1 className="font-mono m-2 text-xl md:text-3xl lg:text-2xl text-titleColor font-bold ">
                My Projects
            </h1>
            <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
                <Card className="w-full h-full row-span-2 col-span-2">
                    <CardHeader>
                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                            <Image
                                src={projects[0].projectImage}
                                alt={projects[0].title}
                                fill
                                className="h-full w-full object-contain"
                            />
                        </AspectRatio>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CardTitle>{projects[0].title}</CardTitle>
                        <CardDescription>{projects[0].description}</CardDescription>
                    </CardContent>
                    <CardFooter className="grid grid-cols-6 items-center gap-2">
                        <ProjectTag tags={projects[0].projectTags} />
                    </CardFooter>
                </Card>
                <SecondaryCard
                    title={projects[1].title}
                    description={projects[1].description}
                    imageSRC={projects[1].projectImage}
                    tags={projects[1].projectTags}
                />
                <SecondaryCard
                    title={projects[2].title}
                    description={projects[2].description}
                    imageSRC={projects[2].projectImage}
                    tags={projects[2].projectTags}
                />
                <CommonCard
                    title={projects[3].title}
                    description={projects[3].description}
                    imageSRC={projects[3].projectImage}
                    tags={projects[3].projectTags}
                />
                <CommonCard
                    title={"Project Title 5"}
                    description={projects[3].description}
                    imageSRC={projects[3].projectImage}
                    tags={projects[3].projectTags}
                />
                <CommonCard
                    title={"Project Title 6"}
                    description={projects[3].description}
                    imageSRC={projects[3].projectImage}
                    tags={projects[3].projectTags}
                />
                <CommonCard
                    title={"Project Title 7"}
                    description={projects[3].description}
                    imageSRC={projects[3].projectImage}
                    tags={projects[3].projectTags}
                />
            </div>
        </section>
    );
};

export default ProjectSection;

interface CardInterface {
    title: string;
    description?: string;
    imageSRC: StaticImageData;
    tags: {
        id: number;
        name: string;
    }[];
}

const SecondaryCard = ({ title, description, imageSRC, tags }: CardInterface) => {
    return (
        <Card className="h-full row-span-2">
            <CardHeader>
                <AspectRatio className="bg-muted rounded-md">
                    <Image src={imageSRC} alt={title} className="h-full w-full object-contain" />
                </AspectRatio>
            </CardHeader>
            <CardContent className="space-y-2">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="grid grid-cols-3 gap-2">
                <ProjectTag tags={tags} />
            </CardFooter>
        </Card>
    );
};

const CommonCard = ({ title, imageSRC, tags }: CardInterface) => {
    return (
        <Card>
            <CardHeader>
                <AspectRatio ratio={6 / 4} className="bg-muted rounded">
                    <Image src={imageSRC} alt={title} fill className="object-contain" />
                </AspectRatio>
            </CardHeader>
            <CardContent className="space-y-1">
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <CardFooter className="grid grid-cols-3 gap-2">
                <ProjectTag tags={tags} />
            </CardFooter>
        </Card>
    );
};

interface Tag {
    id: number;
    name: string;
}
interface ProjectTags {
    tags: Tag[];
}

const ProjectTag = ({ tags }: ProjectTags) => {
    return tags.map(({ id, name }) => (
        <Badge
            key={id}
            className="cursor-pointer flex items-center justify-center"
            variant="outline"
        >
            {name}
        </Badge>
    ));
};
