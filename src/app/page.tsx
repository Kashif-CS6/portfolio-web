import About from "./_components/About";
import Footer from "./_components/common/Footer";
import Navbar from "./_components/common/Navbar";
import Template from "./_components/common/Template/Template";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <Template>
          <Navbar />
        </Template>
      </div>
      <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
        <Template>
          <Hero />
          <About />
          <Contact />
        </Template>
      </div>

      <div className="bg-black">
        <Template>
          <Footer />
        </Template>
      </div>
    </div>
  );
}
