const benefits = [
  "Natural immersion through context",
  "Personalized to your level",
  "Great for beginners",
  "Zero overwhelm — just 5 min/day",
  "Multiple languages available",
  "Works in your inbox",
];

const Benefits = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            WHY PANDA LETTERS?
          </h2>
        </div>

        {/* Benefits list */}
        <div className="max-w-md mx-auto">
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="text-primary font-bold">[✓]</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
