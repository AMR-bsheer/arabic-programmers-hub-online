
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Instructors from "@/components/Instructors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-arabic" dir="rtl">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
