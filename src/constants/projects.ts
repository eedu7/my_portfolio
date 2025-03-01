import { StaticImageData } from "next/image";
import HeroSectionImage from "./images";

interface Project {
    id: number;
    title: string;
    description: string;
    projectImage: StaticImageData;
    projectTags: {
        id: number;
        name: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Project Title",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi optio repudiandae, nisi illum saepe aperiam modi inventore vitae, error corrupti expedita quaerat autem perferendis exercitationem fuga quia debitis facere?",
        projectImage: HeroSectionImage,
        projectTags: [
            {
                id: 1,
                name: "TailwindCSS",
            },
            {
                id: 2,
                name: "Magic UI",
            },
            {
                id: 3,
                name: "FastAPI",
            },
            {
                id: 4,
                name: "NextJS",
            },
            {
                id: 5,
                name: "TypeScript",
            },
            {
                id: 6,
                name: "Python",
            },
            {
                id: 7,
                name: "PostgreSQL",
            },
        ],
    },
    {
        id: 2,
        title: "Byte Blog",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi optio repudiandae, nisi illum saepe aperiam modi inventore vitae, error corrupti expedita quaerat autem perferendis exercitationem fuga quia debitis facere?",
        projectImage: HeroSectionImage,
        projectTags: [
            {
                id: 1,
                name: "TailwindCSS",
            },
            {
                id: 2,
                name: "FastAPI",
            },
            {
                id: 3,
                name: "NextJS",
            },
            {
                id: 4,
                name: "TypeScript",
            },
            {
                id: 5,
                name: "Python",
            },
            {
                id: 6,
                name: "PostgreSQL",
            },
        ],
    },
    {
        id: 3,
        title: "Project Title 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi optio repudiandae, nisi illum saepe aperiam modi inventore vitae, error corrupti expedita quaerat autem perferendis exercitationem fuga quia debitis facere?",
        projectImage: HeroSectionImage,
        projectTags: [
            {
                id: 2,
                name: "Django",
            },
            {
                id: 3,
                name: "VueJS",
            },
            {
                id: 4,
                name: "JavaScript",
            },
            {
                id: 5,
                name: "Python",
            },
            {
                id: 6,
                name: "MySQL",
            },
        ],
    },
    {
        id: 4,
        title: "Project Title 4",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        projectImage: HeroSectionImage,
        projectTags: [
            {
                id: 2,
                name: "Django",
            },
            {
                id: 3,
                name: "VueJS",
            },
            {
                id: 4,
                name: "JavaScript",
            },
        ],
    },
];
