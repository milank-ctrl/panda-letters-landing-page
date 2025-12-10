const steps = [
  {
    num: "01",
    title: "Pick Language",
    description: "Serbian, German, French, Spanish...",
  },
  {
    num: "02",
    title: "Get Daily Stories",
    description: "Fresh AI stories every morning",
  },
  {
    num: "03",
    title: "Learn Naturally",
    description: "Vocabulary + translations included",
  },
  {
    num: "04",
    title: "Track Progress",
    description: "Stories get harder over time",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            HOW IT WORKS
          </h2>
          <p className="text-muted-foreground text-sm">
            No apps. Just email.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-retro p-6 bg-background"
            >
              <span className="font-display text-4xl text-primary">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
