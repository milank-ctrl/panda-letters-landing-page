const EmailPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            SAMPLE EMAIL
          </h2>
          <p className="text-muted-foreground text-sm">
            What lands in your inbox
          </p>
        </div>

        {/* Email mockup */}
        <div className="max-w-xl mx-auto">
          <div className="card-retro">
            {/* Email header */}
            <div className="bg-secondary px-4 py-3 border-b-2 border-foreground">
              <p className="text-xs text-muted-foreground">FROM: panda@pandaletters.com</p>
              <p className="font-bold text-foreground">Your Serbian Story 🐼</p>
            </div>

            {/* Email body */}
            <div className="p-4 space-y-4">
              {/* Story */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">LEVEL: BEGINNER</p>
                <h3 className="font-display text-2xl text-foreground">Марков дан</h3>
                <p className="text-xs text-muted-foreground italic">Marko's Day</p>
              </div>

              <div className="border-2 border-foreground p-3 bg-highlight-yellow">
                <p className="text-sm text-foreground">
                  <strong>Марко</strong> се буди рано. 
                  Он пије <u>кафу</u> и једе <u>хлеб</u>.
                </p>
              </div>

              <p className="text-xs text-muted-foreground border-l-2 border-primary pl-3">
                Marko wakes up early. He drinks coffee and eats bread.
              </p>

              {/* Vocabulary */}
              <div>
                <p className="text-xs font-bold text-foreground mb-2">VOCABULARY:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-secondary border-2 border-foreground p-2">
                    <span className="font-bold">кафа</span> = coffee
                  </div>
                  <div className="bg-secondary border-2 border-foreground p-2">
                    <span className="font-bold">хлеб</span> = bread
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPreview;
