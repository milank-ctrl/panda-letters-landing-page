import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container-narrow px-6">
          <div className="max-w-2xl mx-auto">
            <Link to="/" className="text-primary text-sm hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              PRIVACY POLICY
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-2">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly, including your name, email address, 
                  language preferences, and language proficiency level when you sign up for our waitlist.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">2. How We Use Your Information</h2>
                <p>
                  We use your information to send you personalized language learning content, 
                  communicate updates about our service, and improve our offerings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">3. Data Storage</h2>
                <p>
                  Your data is stored securely and we take appropriate measures to protect 
                  your personal information from unauthorized access or disclosure.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">4. Your Rights</h2>
                <p>
                  You can request access to, correction of, or deletion of your personal data 
                  at any time by contacting us.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">5. Contact</h2>
                <p>
                  For privacy-related inquiries, please contact us at{" "}
                  <a href="mailto:hello@pandaletters.com" className="text-primary hover:underline">
                    hello@pandaletters.com
                  </a>
                </p>
              </section>

              <p className="text-xs pt-4 border-t border-border">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;