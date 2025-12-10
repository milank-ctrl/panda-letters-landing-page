const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-narrow px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <p className="font-display text-xl">🐼 PANDA LETTERS</p>

          {/* Links */}
          <div className="flex gap-6 text-xs uppercase tracking-wide">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
            <a href="mailto:hello@pandaletters.com" className="hover:underline">Contact</a>
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
