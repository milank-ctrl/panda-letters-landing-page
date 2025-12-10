import { useEffect } from "react";

const SignupForm = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="signup" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              JOIN WAITLIST
            </h2>
            <p className="text-muted-foreground text-sm">
              Early access = special discount
            </p>
          </div>

          {/* Tally form embed */}
          <div className="card-retro p-4">
            <iframe
              data-tally-src="https://tally.so/embed/w7NJKL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="300"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Join Waitlist"
              className="min-h-[300px]"
            />
            
            <noscript>
              <p className="text-center text-muted-foreground text-sm">
                Enable JavaScript or visit{" "}
                <a 
                  href="https://tally.so/r/w7NJKL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  signup page
                </a>.
              </p>
            </noscript>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            * No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
