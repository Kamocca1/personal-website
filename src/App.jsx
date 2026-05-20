import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Home from "@/containers/Home";
import Projects from "@/containers/Projects";
import Services from "@/containers/Services";

const App = () => {
    return (
        <div className="w-full md:min-h-svh overflow-x-hidden flex-1">
            {/* header*/}
            <Header />

            {/* home */}
            <Home />

            {/* projects */}
            <Projects />

            {/* about */}
            <About />

            {/* services */}
            <Services />

            {/* testimonials */}

            {/* contact */}
            <Contact />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default App;
