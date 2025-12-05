import { useEffect } from "react";

const SignupForm = () => {
  useEffect(() => {
    // Load Tally script
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="signup" className="section-padding gradient-section">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Join the Waitlist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start your language journey today
            </h2>
            <p className="text-lg text-muted-foreground">
              Be the first to know when we launch. Early access members get a special discount!
            </p>
          </div>

          {/* Tally form embed */}
          <div className="card-soft p-6 md:p-8 shadow-large">
            <iframe
              data-tally-src="https://tally.so/embed/w7NJKL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="300"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Join the Panda Letters Waitlist"
              className="min-h-[300px]"
            />
            
            {/* Fallback message */}
            <noscript>
              <p className="text-center text-muted-foreground">
                Please enable JavaScript to see the signup form, or visit{" "}
                <a 
                  href="https://tally.so/r/w7NJKL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  our signup page
                </a>.
              </p>
            </noscript>
          </div>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            🔒 We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
