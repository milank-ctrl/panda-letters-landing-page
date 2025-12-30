import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
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
              TERMS OF SERVICE
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-2">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Panda Letters, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">2. Service Description</h2>
                <p>
                  Panda Letters provides AI-generated language learning content delivered via email. 
                  The service is currently in early access and features may change.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">3. User Responsibilities</h2>
                <p>
                  You are responsible for providing accurate information and maintaining the 
                  confidentiality of your account. You agree not to misuse the service.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">4. Intellectual Property</h2>
                <p>
                  All content, including AI-generated stories, designs, and branding, 
                  are the property of Panda Letters and protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">5. Limitation of Liability</h2>
                <p>
                  Panda Letters is provided "as is" without warranties. We are not liable for any 
                  indirect, incidental, or consequential damages arising from use of the service.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-2">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the 
                  service constitutes acceptance of updated terms.
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

export default Terms;