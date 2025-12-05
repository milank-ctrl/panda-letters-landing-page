import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import EmailPreview from "@/components/landing/EmailPreview";
import Benefits from "@/components/landing/Benefits";
import SignupForm from "@/components/landing/SignupForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <EmailPreview />
        <Benefits />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
