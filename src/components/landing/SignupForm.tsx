import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = ["Serbian", "Hungarian", "Spanish"];
const levels = ["Beginner", "Elementary", "Intermediate", "Upper Intermediate", "Advanced"];

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // POST to Resend contacts will be implemented when the website goes live
    console.log({ name, email, language, level });
  };

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

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="card-retro p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="bg-background border-foreground">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent className="bg-background border-foreground">
                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Language Level</Label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="bg-background border-foreground">
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent className="bg-background border-foreground">
                  {levels.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>
                      {lvl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Submit (Coming Soon)
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-4">
            * No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;