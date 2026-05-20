import { GithubIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Footer = () => {
    return (
        <footer className="w-full bg-black py-16 md:py-24 px-4 border-t border-neutral-800">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl max-h-[500px]:text-3xl font-semibold text-neutral-50 font-serif italic text-center">
                    Kamohelo Matobako
                </h2>

                <div className="flex items-center justify-center gap-8">
                    <a
                        href="https://www.linkedin.com/in/kamohelo-matobako/"
                        aria-label="LinkedIn"
                    >
                        <HugeiconsIcon
                            icon={Linkedin01Icon}
                            className="text-2xl text-neutral-400 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out"
                        />
                    </a>

                    <a href="https://github.com/Kamocca1" aria-label="GitHub">
                        <HugeiconsIcon
                            icon={GithubIcon}
                            className="text-2xl text-neutral-400 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out"
                        />
                    </a>
                </div>

                <p className="text-neutral-500 text-xs mt-4">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
