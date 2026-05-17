import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavMenus } from "@/utils/helper";
import { useEffect, useState } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const syncFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const section = params.get("section");
            setActiveSection(section || "home");
        };
        syncFromUrl();

        window.addEventListener("popstate", syncFromUrl);

        return () => window.removeEventListener("popstate", syncFromUrl);
    }, []);

    const handleNavClick = (menu) => {
        const url = new URL(window.location);

        if (menu.key === "home") {
            url.search = "";
            window.history.pushState({}, "", url);

            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
            return;
        }

        url.searchParams.set("section", menu.key);

        window.history.pushState({}, "", url);

        document
            .getElementById(menu.key)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });

        setActiveSection(menu.key);
    };

    return (
        <header
            className={`
    flex items-center justify-between w-full  p-4 md:p-8 fixed top-0 left-0 z-50
    `}
        >
            <div
                className={`flex items-center justify-between container mx-auto transition-all duration-300 ease-in-out $`}
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
