import { BlogApp, InventoryApp, PokemonApp } from "@/assets";

export const NavMenus = [
    {
        label: "Home",
        url: "/?section=home",
        key: "home",
    },
    {
        label: "Projects",
        url: "/?section=projects",
        key: "projects",
    },
    {
        label: "About",
        url: "/?section=about",
        key: "about",
    },
    {
        label: "Services",
        url: "/?section=services",
        key: "services",
    },
    // {
    //     label: "Testimonials",
    //     url: "/?section=testimonials",
    //     key: "testimonials",
    // },
];

export const ProjectData = [
    {
        title: "BMW Inventory Management System",
        description:
            "A server-side rendered CRUD application for automotive stock management. Features include secure user authentication, form validation for part entries, and a relational database schema for tracking parts, categories, and vehicle trims.",
        techStacks: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "EJS",
            "Passport.js",
            "Express-Validator",
        ],
        image: InventoryApp,
    },
    {
        title: "aspdevs Blog Application",
        description:
            "A full-stack React platform featuring a secure REST API. Includes JWT-based authentication, cloud-hosted image management via Cloudinary, and Prisma ORM for complex data relations. Built with a focus on security using Helmet and rate-limiting.",
        techStacks: [
            "React 19",
            "Prisma",
            "PostgreSQL",
            "Vite",
            "Express",
            "JWT",
            "Cloudinary",
        ],
        image: BlogApp,
    },
    {
        title: "Pokémon Memory Game",
        description:
            "A memory-testing application that challenges users to click unique cards without repeating a selection. This project demonstrates advanced React state management, utilizing functional components and hooks to handle randomized shuffling logic and persistent high-score tracking.",
        techStacks: [
            "React 19",
            "Vite",
            "REST API (PokéAPI)",
            "JavaScript (ES6+)",
            "CSS3 / Flexbox",
            "ESLint",
        ],
        image: PokemonApp,
    },
];
