import { AboutImg } from "@/assets";
import { GithubIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const About = () => {
    const experience = [
        {
            role: "Founder & Full Stack Developer",
            company: "Hirekey",
            years: "2023 - Current",
        },
        {
            role: "Enterprise Solutions Developer",
            company: "Black Anchor Property",
            years: "2023 - 2025",
        },
        {
            role: "Commercial Real Estate Broker & Technology Lead",
            company: "TITAN Property Group",
            years: "2022 - 2023",
        },
        {
            role: "Senior Strategic Advisor (Digital Transformation)",
            company: "ERM Corporate Services",
            years: "2021 - 2022",
        },
        {
            role: "Business Development Associate (Tech-Enabled Growth)",
            company: "ERM Corporate Services",
            years: "2020 - 2021",
        },
    ];

    return (
        <section
            id="about"
            className="w-full h-auto md:h-screen pt-24 container mx-auto px-6 relative flex flex-col items-center justify-around"
        >
            <div className="space-y-6">
                <h2 className="text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase">
                    Who Am I
                </h2>

                <h3 className="text-2xl md:text-4xl text-center font-normal font-serif text-neutral-600">
                    Providing solutions since{" "}
                    <span className="font-sans font-semibold text-neutral-400">
                        2020
                    </span>
                </h3>

                <p className="max-w-xl text-center text-sm text-neutral-500">
                    Software Engineer | Full Stack Developer | SaaS & Enterprise
                    Systems Specialist | React, Node.js, Python, PostgreSQL |
                    Building Scalable Digital Products
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-22">
                {/* left */}
                <div className="w-full space-y-6 ">
                    <div className="aspect-square rounded-lg shadow hover:shadow-lg bg-black  flex items-center justify-en -rotate-3 hover:rotate-0 transition-all duration-150 ease-in-out overflow-hidden">
                        <img
                            src={AboutImg}
                            className="w-full h-full object-contain"
                            alt="Kamohelo"
                        />
                    </div>

                    <div className="w-full flex items-center justify-end gap-12">
                        <a
                            href="https://www.linkedin.com/in/kamohelo-matobako/"
                            aria-label="LinkedIn"
                        >
                            <HugeiconsIcon
                                icon={Linkedin01Icon}
                                className="text-neutral-500 text-2xl hover:text-sky-500 hover:scale-110 transition-all duration-150 ease-in-out"
                            />
                        </a>

                        <a
                            href="https://github.com/Kamocca1"
                            aria-label="GitHub"
                        >
                            <HugeiconsIcon
                                icon={GithubIcon}
                                className="text-neutral-500 text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-150 ease-in-out"
                            />
                        </a>
                    </div>
                </div>
                {/* right */}

                <div className="w-full flex flex-col items-start justify-around">
                    <p className="text-base tracking-wider text-neutral-500">
                        I’m a Full Stack Software Engineer and SaaS Product
                        Builder passionate about solving real business problems
                        through scalable technology solutions, enterprise
                        automation, and intelligent systems design. <br />{" "}
                        <br /> My career path is unconventional by design. I
                        transitioned from Corporate Finance, Commercial Real
                        Estate, and Digital Transformation into Software
                        Engineering after recognizing how deeply technology
                        shapes operational efficiency, business growth, and user
                        experience. <br /> <br />
                        That blend of technical execution and commercial
                        understanding allows me to approach software development
                        with both engineering precision and business impact in
                        mind.
                    </p>

                    <div className="w-full border-l-2 border-gray-200 px-2.5">
                        {experience.map((exp, index) => (
                            <ExpCard key={index} data={exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExpCard = ({ data }) => {
    return (
        <div className="grid grid-cols-3 gap-6 p-3 border-b border-gray-200">
            <h2 className="text-left text-sm font-normal text-neutral-700">
                {data.role}
            </h2>
            <h2 className="text-left text-sm font-normal text-neutral-700">
                {data.company}
            </h2>
            <p className="text-right text-sm font-normal text-neutral-700">
                {data.years}
            </p>
        </div>
    );
};

export default About;
