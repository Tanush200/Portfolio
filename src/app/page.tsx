import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarPage from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <NavbarPage/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Testimonials/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}
