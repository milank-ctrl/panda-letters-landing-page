import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import pandaHero from "@/assets/panda-hero.png";

const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-highlight-green rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-highlight-pink rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-highlight-yellow rounded-full blur-2xl opacity-50" />

      <div className="container-narrow section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border/50">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Now accepting early access signups
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
              Learn languages through{" "}
              <span className="text-primary">daily stories</span> in your inbox
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Panda Letters delivers personalized, AI-generated short stories
              with vocabulary and explanations—directly to your email, every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="lg" onClick={scrollToSignup}>
                Join the Waitlist
                <ArrowDown className="ml-1 animate-bounce" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                See How It Works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              🎉 Free during early access • No credit card required
            </p>
          </div>

          {/* Right content - Panda illustration */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110" />
              <img
                src={pandaHero}
                alt="Panda reading letters - Panda Letters mascot"
                className="relative w-72 md:w-96 lg:w-[450px] animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
