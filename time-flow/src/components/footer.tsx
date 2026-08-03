export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm">
            © 2024 TimeFlow. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="/privacy-zh.html" className="text-white/60 hover:text-white text-sm transition-colors">
              隐私政策
            </a>
            <a href="/support-zh.html" className="text-white/60 hover:text-white text-sm transition-colors">
              技术支持
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
