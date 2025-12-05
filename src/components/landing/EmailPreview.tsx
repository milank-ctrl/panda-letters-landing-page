import { Mail, Star, Clock } from "lucide-react";

const EmailPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A daily dose of language learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what your daily email looks like—simple, engaging, and effective.
          </p>
        </div>

        {/* Email mockup */}
        <div className="max-w-2xl mx-auto">
          <div className="card-soft overflow-hidden shadow-large">
            {/* Email header */}
            <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Panda Letters</span>
                  <span className="text-xs bg-highlight-green text-panda-dark px-2 py-0.5 rounded-full">Daily Story</span>
                </div>
                <p className="text-sm text-muted-foreground">Your Serbian story for today 🐼</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>8:00 AM</span>
              </div>
            </div>

            {/* Email body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Story title */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span className="text-sm font-medium text-accent">Level: Beginner</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Марков дан</h3>
                <p className="text-sm text-muted-foreground italic">Marko's Day</p>
              </div>

              {/* Story content */}
              <div className="bg-secondary/30 rounded-2xl p-5 space-y-4">
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold">Марко</span> се буди рано ујутру. 
                  Он пије <span className="bg-highlight-yellow px-1 rounded">кафу</span> и 
                  једе <span className="bg-highlight-yellow px-1 rounded">хлеб</span>. 
                  После доручка, он иде на <span className="bg-highlight-green px-1 rounded">посао</span>.
                </p>
                <p className="text-muted-foreground text-sm italic border-l-2 border-primary pl-3">
                  Marko wakes up early in the morning. He drinks coffee and eats bread. 
                  After breakfast, he goes to work.
                </p>
              </div>

              {/* Vocabulary section */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📚 Today's Vocabulary
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { word: "кафа", translation: "coffee", pronunciation: "kafa" },
                    { word: "хлеб", translation: "bread", pronunciation: "hleb" },
                    { word: "посао", translation: "work", pronunciation: "posao" },
                    { word: "ујутру", translation: "in the morning", pronunciation: "ujutru" },
                  ].map((item) => (
                    <div key={item.word} className="bg-card border border-border rounded-xl p-3">
                      <span className="font-bold text-foreground">{item.word}</span>
                      <span className="text-muted-foreground text-sm ml-2">/{item.pronunciation}/</span>
                      <p className="text-sm text-primary">{item.translation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grammar tip */}
              <div className="bg-highlight-blue/50 rounded-2xl p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  💡 Grammar Tip
                </h4>
                <p className="text-sm text-muted-foreground">
                  Notice how <strong>"се буди"</strong> is a reflexive verb. In Serbian, 
                  reflexive verbs use the particle "се" (se) to indicate the action is 
                  done to oneself.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-8 gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="w-3 h-3 bg-border rounded-full" />
            <div className="w-3 h-3 bg-border rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPreview;
