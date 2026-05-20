import Header from "@/components/Header";
import About from "@/containers/About";
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

            {/* footer */}
        </div>
    );
};

export default App;
