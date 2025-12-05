import { Globe, Mail, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Pick Your Language",
    description: "Choose from Serbian, German, French, Spanish, and more languages to start your journey.",
    color: "bg-highlight-green",
  },
  {
    icon: Mail,
    title: "Receive Daily Stories",
    description: "Every morning, get a fresh AI-generated short story delivered straight to your inbox.",
    color: "bg-highlight-blue",
  },
  {
    icon: BookOpen,
    title: "Learn Vocabulary Naturally",
    description: "Each story includes vocabulary lists, translations, and grammar tips for easy learning.",
    color: "bg-highlight-pink",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Watch your comprehension improve as stories gradually increase in complexity.",
    color: "bg-highlight-yellow",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-section">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Language learning made simple
          </h2>
          <p className="text-lg text-muted-foreground">
            No apps to download, no complicated schedules. Just open your email and start reading.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group card-soft p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl font-bold text-border/80 group-hover:text-primary/20 transition-colors">
                  {index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-7 h-7 text-panda-dark" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
