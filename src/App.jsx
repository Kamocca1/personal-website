import Header from "@/components/Header";
import Home from "@/containers/Home";
import Work from "@/containers/Work";
import About from "./containers/About";

const App = () => {
    return (
        <div className="w-full min-h-screen overflow-hidden flex-1">
            {/* header*/}
            <Header />

            {/* home */}
            <Home />

            {/* work */}
            <Work />

            {/* about */}
            <About />
            {/* services */}

            {/* testimonials */}

            {/* contact */}

            {/* footer */}
        </div>
    );
};

export default App;
