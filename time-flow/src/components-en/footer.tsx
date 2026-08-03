export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm">
            © 2026 TimeFlow. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="/privacy-en.html" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/support-en.html" className="text-white/60 hover:text-white text-sm transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
