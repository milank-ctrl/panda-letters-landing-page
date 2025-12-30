import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => {
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
              CONTACT US
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <p>
                We'd love to hear from you! Whether you have questions, feedback, 
                or just want to say hello, reach out to us.
              </p>

              <div className="card-retro p-6 space-y-4">
                <div>
                  <h2 className="font-display text-lg text-foreground mb-1">Email</h2>
                  <a 
                    href="mailto:hello@pandaletters.com" 
                    className="text-primary hover:underline"
                  >
                    hello@pandaletters.com
                  </a>
                </div>

                <div>
                  <h2 className="font-display text-lg text-foreground mb-1">Response Time</h2>
                  <p>We typically respond within 24-48 hours.</p>
                </div>
              </div>

              <p className="text-sm">
                For partnership or business inquiries, please include "[Partnership]" 
                in your email subject line.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;