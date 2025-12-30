import { Button } from "@/components/ui/button";
import pandaHero from "@/assets/panda-hero.png";

const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-background pt-16">
      <div className="container-narrow section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-bold animate-pulse">
              [ Coming Soon ]
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none">
              LEARN LANGUAGES<br />
              <span className="text-primary">THROUGH STORIES</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-md mx-auto lg:mx-0">
              AI-generated short stories with vocabulary delivered to your inbox daily.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="lg" onClick={scrollToSignup}>
                Join Waitlist →
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                How It Works
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              * Free during early access
            </p>
          </div>

          {/* Right content - Panda illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="border-2 border-foreground bg-card p-4">
              <img
                src={pandaHero}
                alt="Panda mascot"
                className="w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
