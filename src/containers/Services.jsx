import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const Services = () => {
    return (
        <section
            id="services"
            className="w-full h-auto md:min-h-screen pt-24 container mx-auto px-6 relative space-y-12 flex flex-col items-center justify-center"
        >
            <h2 className="text-xl md:text-2xl text-center font-serif italic text-neutral-800">
                Hello!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
                    {/* first one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Product Design</p>
                    </div>
                    {/* second One */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-sky-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">UX Design</p>
                    </div>
                    {/* third one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-black">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">User Research</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full col-span-3">
                    <p className="text-center text-neutral-800 font-normal font-serif tracking-widest text-2xl md:text-4xl w-full">
                        focus is on blending clear strategy, thoughtful design,
                        and user empathy to{" "}
                        <span className="text-neutral-300">
                            craft experiences that solve real problems
                        </span>
                    </p>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
                    {/* first one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Design Systems</p>
                    </div>
                    {/* second One */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Usablity Testings</p>
                    </div>
                    {/* third one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6 ">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Brand Identity</p>
                    </div>
                </div>
            </div>

            <h2 className="text-xl md:text-2xl text-center font-serif italic text-neutral-800">
                here&apos;s how it works
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:px-12">
                <Card className="p-4 outline-none border-none shadow-none bg-neutral-200 hover:-rotate-6 transition-all duration-200 ease-in-out hover:shadow-lg min-h-111 flex items-start flex-col justify-between">
                    <p className="text-4xl font-semibold text-neutral-700">
                        01
                    </p>

                    <div className="w-full space-y-2">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Discover
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt cupiditate laudantium ea sed est,
                            doloribus nemo commodi dolore. Tempora recusandae
                            tenetur quis. Eius iste ullam quae. Ad sunt odit
                            inventore.
                        </p>
                    </div>
                </Card>

                {/* second card */}
                <Card className="p-4 outline-none border-none shadow-none bg-neutral-200 hover:rotate-6 transition-all duration-200 ease-in-out hover:shadow-lg min-h-111 flex items-start flex-col justify-between">
                    <p className="text-4xl font-semibold text-neutral-700">
                        02
                    </p>

                    <div className="w-full space-y-2">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Design
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt cupiditate laudantium ea sed est,
                            doloribus nemo commodi dolore. Tempora recusandae
                            tenetur quis. Eius iste ullam quae. Ad sunt odit
                            inventore.
                        </p>
                    </div>
                </Card>
                {/* third card */}
                <Card className="p-4 outline-none border-none shadow-none bg-neutral-200 hover:-rotate-6 transition-all duration-200 ease-in-out hover:shadow-lg min-h-111 flex items-start flex-col justify-between">
                    <p className="text-4xl font-semibold text-neutral-700">
                        03
                    </p>

                    <div className="w-full space-y-2">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Deliver
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt cupiditate laudantium ea sed est,
                            doloribus nemo commodi dolore. Tempora recusandae
                            tenetur quis. Eius iste ullam quae. Ad sunt odit
                            inventore.
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Services;
