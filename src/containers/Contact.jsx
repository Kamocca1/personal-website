import { Card } from "@/components/ui/card";
import { Calendar, Check, Clock, Globe, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const emailAddress = "kamohelotmatobako@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopied(true);

            // Reset back to original state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
    };

    return (
        <section
            id="contact"
            className="w-full h-auto md:min-h-[80svh] pt-24 max-h-[500px]:pt-12 pb-24 container mx-auto px-4 lg:px-6 relative flex flex-col items-center justify-center space-y-12"
        >
            <div className="space-y-4 text-center">
                <h2 className="text-xl md:text-3xl font-serif italic text-neutral-800">
                    Let&apos;s get in touch
                </h2>
                <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
                    Open to full-time engineering opportunities globally and
                    locally. Let&apos;s discuss how I can bring value to your
                    engineering team.
                </p>
            </div>

            {/* Bento Box Grid Layout */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Primary Email Card (Click-to-Copy Takeover) */}
                <button
                    onClick={handleCopy}
                    className="md:col-span-2 group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 rounded-xl transition-all"
                    aria-label="Copy email address to clipboard"
                >
                    <Card
                        className={`h-full p-8 border-none shadow-sm rounded-xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-start justify-between min-h-[200px] cursor-pointer ${
                            copied
                                ? "bg-neutral-800 text-white"
                                : "bg-neutral-100 hover:bg-neutral-200"
                        }`}
                    >
                        {/* Dynamic Icon Wrapper */}
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm transition-all duration-300 ${
                                copied
                                    ? "bg-green-500 scale-110"
                                    : "bg-white group-hover:scale-110"
                            }`}
                        >
                            {copied ? (
                                <Check
                                    className="text-white animate-in zoom-in-50 duration-200"
                                    size={24}
                                />
                            ) : (
                                <Mail className="text-neutral-700" size={24} />
                            )}
                        </div>

                        <div>
                            {/* Dynamic Text Copy */}
                            <p
                                className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                                    copied
                                        ? "text-green-400"
                                        : "text-neutral-500"
                                }`}
                            >
                                {copied
                                    ? "Copied to clipboard!"
                                    : "Click to copy email"}
                            </p>
                            <h3
                                className={`text-xl sm:text-2xl md:text-3xl font-semibold break-all transition-colors duration-300 ${
                                    copied ? "text-white" : "text-neutral-800"
                                }`}
                            >
                                {emailAddress}
                            </h3>
                        </div>
                    </Card>
                </button>

                {/* Location / Mobility Card */}
                <Card className="p-8 outline-none border-none shadow-sm bg-neutral-100 flex flex-col items-start justify-between min-h-[200px]">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <MapPin className="text-neutral-700" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500 mb-1">
                            Location
                        </p>
                        <h3 className="text-xl font-semibold text-neutral-800">
                            Centurion, SA
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1">
                            Open to Relocation
                        </p>
                    </div>
                </Card>

                {/* Global Timezone Card */}
                <Card className="p-8 outline-none border-none shadow-sm bg-neutral-100 flex flex-col items-start justify-between min-h-[200px]">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <Clock className="text-neutral-700" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500 mb-1">
                            Timezone
                        </p>
                        <h3 className="text-xl font-semibold text-neutral-800">
                            SAST (UTC +2)
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1">
                            Flexible for US / EU overlap
                        </p>
                    </div>
                </Card>

                {/* Work Preferences Status Card */}
                <Card className="p-8 outline-none border-none shadow-sm bg-neutral-100 flex flex-col items-start justify-between min-h-[200px]">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <Globe className="text-neutral-700" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500 mb-1">
                            Availability
                        </p>
                        <h3 className="text-xl font-semibold text-neutral-800">
                            Full-Time Roles
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1">
                            Remote / Hybrid / On-Prem
                        </p>
                    </div>
                </Card>

                {/* Meeting Scheduling Card */}
                <a
                    href="https://calendar.notion.so/meet/kamohelo/1-hour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-1 lg:col-span-1 group focus:outline-none"
                >
                    <Card className="h-full p-8 outline-none border-none shadow-sm bg-neutral-900 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-800 transition-all duration-300 ease-in-out flex flex-col items-start justify-between min-h-[200px]">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Calendar className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-400 mb-1">
                                Scheduling
                            </p>
                            <h3 className="text-xl font-semibold text-white">
                                Book Intro Call
                            </h3>
                        </div>
                    </Card>
                </a>
            </div>
        </section>
    );
};

export default Contact;
