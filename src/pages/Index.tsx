
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-arabic" dir="rtl">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Instructors />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
