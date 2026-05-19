import { HeroBg } from "@/assets";

const Home = () => {
    return (
        <section
            id="home"
            className="w-full h-screen pt-24 relative outer-gradient overflow-hidden"
        >
            <div className="radial-bg"></div>
            <div className="bottom-left-gradient"></div>
            <div className="bottom-right-gradient"></div>

            {/* Hero image */}
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none overflow-hidden">
                <img
                    alt="Kamohelo"
                    src={HeroBg}
                    className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[780px] grayscale contrast-125 brightness-110 object-contain object-bottom image-mask"
                />
            </div>

            <div className="relative flex flex-col items-center justify-between text-center pointer-events-none h-full container mx-auto">
                <h2 className="text-neutral-700 font-normal font-serif italic text-6xl md:text-7xl lg:text-9xl tracking-widest ">
                    Hey, there
                </h2>

                <div className="w-full hidden md:flex items-center justify-between px-12">
                    {/* Available for new opportunities  */}
                    <div className="p-2 px-3 rounded-full bg-white shadow-sm flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        </div>

                        <span className="text-xs text-neutral-700">
                            Available for new opportunities
                        </span>
                    </div>

                    {/* Specialized */}
                    <p className="w-44 text-left text-xs tracking-wider text-neutral-700">
                        Specialized in React, Next.js, Node, Postgres,
                        TypeScript, Python, and AI Digital Transformation
                        Solutions
                    </p>
                </div>

                <div className="w-full flex items-center justify-between px-4 md:px-12 z-30">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-left font-bold font-sans tracking-widest uppercase text-neutral-800 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">
                        I am <br /> Kamohelo
                    </h1>
                    <h2 className="text-xl md:text-4xl text-left font-bold tracking-wider uppercase text-neutral-800 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">
                        Full <br /> Stack <br /> Software <br /> Engineer
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Home;
