import { Footer, Navbar } from "./ui";
import {
  Home,
  Experience,
  Contact,
  Projects,
  Services,
  CoreValues,
} from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";

const Page = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <div className="backdrop-blur-md h-5 w-full sticky top-0 left-0 z-10"></div>
        <Navbar />

        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <CoreValues />

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Page;
