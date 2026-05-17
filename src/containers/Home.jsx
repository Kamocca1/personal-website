import { HeroBg } from "@/assets";

const Home = () => {
    return (
        <div className="w-full h-screen bg-gray-100 pt-24 relative outer-gradient">
            <div className="radial-bg"></div>
            <div className="bottom-left-gradient"></div>
            <div className="bottom-right-gradient"></div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    alt="Kamohelo"
                    src={HeroBg}
                    className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[780px] grayscale contrast-125 brightness-110 object-contain object-bottom image-mask"
                />
            </div>

            <div className="relative flex flex-col items-center text-center pt-12 pointer-events-none">
                <h2 className="text-neutral-700 font-bold font-serif italic text-6xl md:text-7xl lg:text-9xl tracking-widest">
                    Hey, there
                </h2>
            </div>
        </div>
    );
};

export default Home;
