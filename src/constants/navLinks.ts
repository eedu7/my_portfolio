
interface Links {
    id: number;
    label: string;
    url: string;
}

const navLinks: Links[] = [
    {
        id: 1,
        label: "Home",
        url: "/"
    },
    {
        id: 2,
        label: "About",
        url: "#about"
    },
    {
        id: 3,
        label: "Projects",
        url: "#projects"
    },
    {
        id: 4,
        label: "Contact",
        url: "#contact"
    },
]

export default navLinks;

