'use client';

import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-blue-500/20 to-purple-500/10 p-8 md:p-16 text-center"
        >
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full bg-blue-500/10 blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Start tracking your time
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Make every minute count, better understand and manage your time
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-black font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              <Apple className="h-6 w-6" />
              Download for free on App Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
