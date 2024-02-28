import Image from "next/image";
import Link from "next/link";
import AboutMe from "./ui/aboutMe";
import Services from "./ui/services";
import Testimonials from "./ui/testimonials";
import Contact from "./ui/contact";
import HeroSection from "./ui/hero";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
