import { Check, Sparkles, Heart, Target, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Natural Immersion",
    description: "Learn through context, just like children learn their first language—through stories and real-world usage.",
  },
  {
    icon: Heart,
    title: "Personalized Content",
    description: "AI adapts to your level and interests, ensuring every story feels relevant and engaging to you.",
  },
  {
    icon: Target,
    title: "Great for Beginners",
    description: "Start from zero with carefully crafted stories that introduce vocabulary gradually and naturally.",
  },
  {
    icon: Zap,
    title: "Zero Overwhelm",
    description: "Just one short story per day. No apps, no streaks, no pressure—just steady, enjoyable progress.",
  },
  {
    icon: Users,
    title: "Multiple Languages",
    description: "Serbian, German, French, Spanish, and more. Learn the language that matters most to you.",
  },
  {
    icon: Check,
    title: "Works in Your Inbox",
    description: "No new apps to check. Learning arrives where you already are—your email inbox.",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Panda Letters?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for busy people who want to learn
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional language apps can feel like a chore. Panda Letters fits naturally into your morning routine.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by language learners worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-sm">Waitlist signups</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl font-bold">12</span>
              <span className="text-sm">Languages supported</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-sm">AI-powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
