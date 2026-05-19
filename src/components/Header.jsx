import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavMenus } from "@/utils/helper";
import { useEffect, useState } from "react";

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
        // Create an observer that triggers when a section crosses the middle of the screen
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Creates a "trigger band" in the center of the viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    setActiveSection(currentId);

                    // Update the URL quietly without cluttering the user's browser history so I'm not creating 50 new history entries while they scroll, which would ruin the user's ability to use the browser's "Back" button
                    const url = new URL(window.location);
                    url.searchParams.set("section", currentId);
                    window.history.replaceState({}, "", url);
                }
            });
        }, observerOptions);

        // Tell the observer to watch every section ID listed in the NavMenu
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
                "w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300",
                // Adjust padding when scrolled to make the bar feel more compact
                isScrolled ? "p-2 md:p-4" : "p-4 md:p-8",
            )}
        >
            <div
                className={cn(
                    "flex items-center justify-between container mx-auto transition-all duration-500 ease-in-out px-6 py-3",
                    // 2. Apply background, rounding, and border only when scrolled
                    isScrolled &&
                        "bg-white/90 backdrop-blur-md shadow-md rounded-4xl border-x border-b border-neutral-100",
                )}
            >
                <h2 className="text-2xl md:text-3xl italic font-serif font-normal text-neutral-700">
                    Kamohelo.
                </h2>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-6">
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
                </div>
            </div>
        </header>
    );
};

export default Header;
