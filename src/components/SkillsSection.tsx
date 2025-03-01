"use client";

import React from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    SiCss3,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Marquee } from "./magicui/marquee";

interface Skill {
    id: number;
    Icon: IconType;
    label: string;
    color: string;
}

const skills: Skill[] = [
    { id: 1, Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
    {
        id: 2,
        Icon: SiCss3,
        label: "CSS3",
        color: "#1572B6",
    },
    { id: 3, Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    {
        id: 4,
        Icon: SiTypescript,
        label: "TypeScript",
        color: "#3178C6",
    },
    { id: 5, Icon: SiPython, label: "Python", color: "#306998" },
    {
        id: 6,
        Icon: SiFastapi,
        label: "FastAPI",
        color: "#009688",
    },
    { id: 7, Icon: SiDjango, label: "Django", color: "#092E20" },
    {
        id: 8,
        Icon: SiDocker,
        label: "Docker",
        color: "#2496ED",
    },
    { id: 9, Icon: SiGit, label: "Git", color: "#F05032" },
    {
        id: 10,
        Icon: SiGithub,
        label: "GitHub",
        color: "#181717",
    },
    { id: 11, Icon: SiMysql, label: "MySQL", color: "#4479A1" },
    {
        id: 12,
        Icon: SiPostgresql,
        label: "PostgreSQL",
        color: "#336791",
    },
    { id: 13, Icon: SiPostman, label: "Postman", color: "#FF6C37" },
];

const SkillsSection = () => {
    return (
        <section className="mt-20 mx-2 space-y-4">
            <h1 className="font-mono text-xl md:text-2xl text-titleColor font-bold ">My Skills</h1>
            <div className="mx-2 relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover repeat={40} className="[--duration:20s]">
                    {skills.map(({ id, Icon, label, color }) => (
                        <TooltipProvider key={id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="flex w-full h-full flex-col justify-center items-center p-2 transition hover:scale-110 hover:shadow rounded">
                                        <Icon color={color} className="size-4 md:size-8" />
                                        <p
                                            className="text text-[8px] md:text-sm tracking-widest mt-2 font-mono"
                                            style={{ color: color }}
                                        >
                                            {label}
                                        </p>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
};

export default SkillsSection;
