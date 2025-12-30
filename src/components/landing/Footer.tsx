import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-narrow px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <Link to="/" className="font-display text-xl hover:opacity-80">🐼 PANDA LETTERS</Link>

          {/* Links */}
          <div className="flex gap-6 text-xs uppercase tracking-wide">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-background/20 text-center">
          <p className="text-xs text-background/60">
            © 2025 Panda Letters
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
