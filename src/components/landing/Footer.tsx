import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-panda-black text-primary-foreground py-12">
      <div className="container-narrow px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">🐼 Panda Letters</h3>
            <p className="text-primary-foreground/70 text-sm">
              Learn languages through daily stories
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="#privacy" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="mailto:hello@pandaletters.com" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#twitter" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#linkedin" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#instagram" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@pandaletters.com" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 Panda Letters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
