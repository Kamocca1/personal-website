const Contact = () => {
    return (
        <section
            id="contact"
            // Matches the spacing, height, and landscape rules of your other sections
            className="w-full h-auto md:min-h-svh max-h-[500px]:pt-12 pb-24 container mx-auto px-4 lg:px-6 relative space-y-12 flex flex-col items-center justify-center"
        >
            <h2 className="text-center text-neutral-500 font-normal font-serif tracking-widest text-2xl md:text-3xl lg:text-4xl w-full">
                Let&apos;s build real value <br />{" "}
                <span className="pt-12 text-neutral-800 font-semibold">
                    Contact me below.
                </span>
            </h2>

            <form className="w-full max-w-2xl border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6 bg-white/50 backdrop-blur-sm shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border-none outline-none focus:ring-2 focus:ring-neutral-800 p-3.5 text-sm md:text-base text-neutral-700 bg-neutral-100 rounded-lg transition-all"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-none outline-none focus:ring-2 focus:ring-neutral-800 p-3.5 text-sm md:text-base text-neutral-700 bg-neutral-100 rounded-lg transition-all"
                    />
                </div>

                <textarea
                    placeholder="Message"
                    rows={8}
                    className="w-full border-none outline-none focus:ring-2 focus:ring-neutral-800 p-3.5 text-sm md:text-base text-neutral-700 bg-neutral-100 rounded-lg transition-all resize-none"
                />

                <div className="w-full flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-gray-200 rounded-3xl px-4 py-2.5 hover:bg-orange-500 hover:text-white transition-all duration-150 ease-in-out"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
