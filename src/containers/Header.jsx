import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavMenus } from "@/utils/helper";
import { useEffect, useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // --- HANDLE HEADER BACKGROUND ON SCROLL ---
        const handleScroll = () => {
            // Trigger the background change after 20px of scrolling
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        // --- SYNC NAV WITH URL ON LOAD & BACK/FORWARD BUTTONS ---
        const setActiveSectionFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const section = params.get("section");
            if (section) setActiveSection(section);
        };
        setActiveSectionFromUrl();
        window.addEventListener("popstate", setActiveSectionFromUrl);

        // --- SCROLLSPY: OBSERVE SECTIONS ON THE SCREEN ---
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    setActiveSection(currentId);

                    // ONLY modify the browser history URL string on desktop screens
                    // This stops mobile browsers from crashing their scroll threads
                    if (window.innerWidth >= 768) {
                        const url = new URL(window.location);
                        url.searchParams.set("section", currentId);
                        window.history.replaceState({}, "", url);
                    }
                }
            });
        }, observerOptions);

        const sectionIds = NavMenus.map((menu) => menu.key);
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // --- CLEANUP ---
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("popstate", setActiveSectionFromUrl);
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const handleNavClick = (menu) => {
        const url = new URL(window.location);

        url.searchParams.set("section", menu.key);
        window.history.pushState({}, "", url);
        document
            .getElementById(menu.key)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });

        setActiveSection(menu.key);
    };

    return (
        <header
            className={cn(
                "w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 p-4 md:p-8",
                isScrolled && "md:p-4", // Only scales padding down on desktop (md and up)
            )}
        >
            {/* LAYOUT CONTAINER: Never changes size or border/shadow */}
            <div className="relative flex items-center justify-between container mx-auto px-4 lg:px-6 py-3 border-x border-b border-transparent">
                {/* STYLING LAYER: Handles the visual transition */}
                <div
                    className={cn(
                        "absolute inset-0 -z-10 transition-all duration-500 ease-in-out transform-gpu",
                        isScrolled
                            ? "opacity-100 bg-white/90 backdrop-blur-md shadow-md rounded-4xl border border-neutral-100"
                            : "opacity-0",
                    )}
                />
                <h2 className="text-2xl md:text-3xl italic font-serif font-normal text-neutral-700">
                    Kamohelo.
                </h2>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2 lg:gap-6">
                        {NavMenus.map((menu) => {
                            const isActive = activeSection === menu.key;

                            return (
                                <li key={menu.key}>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(menu);
                                        }}
                                        className={cn(
                                            "text-sm lg:text-base text-neutral-600 hover:text-neutral-800 hover:font-semibold transition-all ease-in-out duration-75 p-1.5 lg:p-2.5",
                                            isActive &&
                                                "text-neutral-800 font-semibold",
                                        )}
                                        href={menu.url}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center justify-center gap-2">
                    <a
                        href="/?section=contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick({
                                label: "Contact",
                                url: "/?section=contact",
                                key: "contact",
                            });
                        }}
                    >
                        <Button size="sm" className={"cursor-pointer"}>
                            Contact
                        </Button>
                    </a>

                    <Sheet>
                        <SheetTrigger className="block md:hidden">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle />
                            </SheetHeader>

                            <nav>
                                <ul className="flex items-start flex-col justify-start gap-12">
                                    {NavMenus.map((menu) => {
                                        const isActive =
                                            activeSection === menu.key;

                                        return (
                                            <li key={menu.key}>
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleNavClick(menu);
                                                    }}
                                                    className={cn(
                                                        "text-neutral-600 hover:text-neutral-800 hover:font-semibold transition-all ease-in-out duration-75 p-2.5",
                                                        isActive &&
                                                            "text-neutral-800 font-semibold",
                                                    )}
                                                    href={menu.url}
                                                >
                                                    {menu.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
