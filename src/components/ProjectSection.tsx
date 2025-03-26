"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { projects } from "@/constants/projects";

const ProjectSection = () => {
	return (
		<section
			className="mx-2"
			id="projects">
			<h1 className="font-mono m-2 text-xl md:text-2xl text-titleColor font-bold ">
				My Projects
			</h1>
			<div className="w-full h-full grid grid-cols-1  md:grid-cols-3 gap-2 p-2 space-y-2 md:space-y-0">
				<Card className="w-full h-full row-span-2 col-span-2">
					<CardHeader>
						<AspectRatio
							ratio={16 / 9}
							className="bg-muted rounded-md">
							<Image
								src={projects[0].projectImage}
								alt={projects[0].title}
								fill
								className="h-full w-full object-contain"
							/>
						</AspectRatio>
					</CardHeader>
					<CardContent className="space-y-2">
						<CardTitle>{projects[0].title} </CardTitle>
						<CardDescription>{projects[0].description}</CardDescription>
					</CardContent>
					<CardFooter className="grid grid-cols-4 md:grid-cols-5 items-center gap-2">
						<ProjectTag tags={projects[0].projectTags} />
					</CardFooter>
				</Card>
				<SecondaryCard
					title={projects[1].title}
					description={projects[1].description}
					imageSRC={projects[1].projectImage}
					tags={projects[1].projectTags}
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
		<Card className="row-span-2">
			<CardHeader>
				<AspectRatio
					ratio={16 / 8}
					className="bg-muted rounded-md">
					<Image
						src={imageSRC}
						alt={title}
						className="h-full w-full object-contain"
					/>
				</AspectRatio>
			</CardHeader>
			<CardContent className="space-y-2">
				<CardTitle>{title}</CardTitle>
				<CardDescription className="hidden md:flex">{description}</CardDescription>
			</CardContent>
			<CardFooter className="grid grid-cols-2 gap-2">
				<ProjectTag tags={tags} />
			</CardFooter>
		</Card>
	);
};

const CommonCard = ({ title, description, imageSRC, tags }: CardInterface) => {
	return (
		<Card>
			<CardHeader>
				<AspectRatio
					ratio={6 / 4}
					className="bg-muted rounded">
					<Image
						src={imageSRC}
						alt={title}
						fill
						className="object-contain"
					/>
				</AspectRatio>
			</CardHeader>
			<CardContent className="space-y-1">
				<CardTitle>{title}</CardTitle>
				<CardDescription className="hidden md:flex">{description}</CardDescription>
			</CardContent>
			<CardFooter className="grid grid-cols-2 gap-2">
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
			className="cursor-pointer text-[6px] p-1 md:text-sm font-normal flex items-center justify-center"
			variant="outline">
			{name}
		</Badge>
	));
};
