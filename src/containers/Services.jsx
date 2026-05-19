import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const Services = () => {
    return (
        <section
            id="services"
            className="w-full h-auto md:min-h-screen pt-24 container mx-auto px-6 relative space-y-12 flex flex-col items-center justify-center"
        >
            <h2 className="text-xl md:text-3xl text-center font-serif italic text-neutral-800">
                The focus is on
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
                    {/* first one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">PostgreSQL</p>
                    </div>
                    {/* second One */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-sky-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Express.js</p>
                    </div>
                    {/* third one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-black">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">React.js</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full col-span-3">
                    <p className="text-center text-neutral-500 font-normal font-serif tracking-widest text-2xl md:text-4xl w-full ">
                        blending full-stack engineering with commercial strategy
                        to{" "}
                        <span className="text-neutral-800 font-semibold">
                            build scalable systems that drive enterprise growth
                        </span>
                    </p>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
                    {/* first one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Node.js</p>
                    </div>
                    {/* second One */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">Git</p>
                    </div>
                    {/* third one */}
                    <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6 ">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-500">
                            <Zap size={18} className="fill-white text-white" />
                        </div>
                        <p className="text-xs">And more...</p>
                    </div>
                </div>
            </div>

            <h2 className="mt-8 text-xl md:text-3xl text-center font-serif italic text-neutral-800">
                here&apos;s how it works
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-4 md:px-12 overflow-x-hidden">
                {/* first card */}
                <Card className="p-6 outline-none border-none shadow-none bg-neutral-200 flex flex-col items-start justify-start gap-6 hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                    <p className="text-4xl font-semibold text-neutral-700">
                        01
                    </p>

                    <div className="w-full space-y-4">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Architect
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Translating complex business requirements into
                            secure, scalable system architectures. Designing
                            robust data models and database schemas utilizing
                            PostgreSQL and Prisma to ensure high availability,
                            data integrity, and optimal performance.
                        </p>
                    </div>
                </Card>

                {/* second card */}
                <Card className="p-6 outline-none border-none shadow-none bg-neutral-200 flex flex-col items-start justify-start gap-6 hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                    <p className="text-4xl font-semibold text-neutral-700">
                        02
                    </p>

                    <div className="w-full space-y-4">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Engineer
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Developing high-performance, full-stack
                            applications. Engineering clean, responsive user
                            interfaces with React and Next.js, while building
                            out dependable, type-safe RESTful APIs and
                            server-side architecture using Node.js, Express, and
                            TypeScript.
                        </p>
                    </div>
                </Card>
                {/* third card */}
                <Card className="p-6 outline-none border-none shadow-none bg-neutral-200 flex flex-col items-start justify-start gap-6 hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out">
                    <p className="text-4xl font-semibold text-neutral-700">
                        03
                    </p>

                    <div className="w-full space-y-4">
                        <h2 className="text-xl font-semibold text-neutral-700">
                            Automate & Scale
                        </h2>
                        <p className="text-xs text-neutral-500">
                            Eliminating operational inefficiencies through
                            automated workflows and smart systems integration.
                            Deploying platforms to cloud environments via robust
                            Git-driven CI/CD pipelines, optimizing codebases to
                            eliminate performance bottlenecks.
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Services;
