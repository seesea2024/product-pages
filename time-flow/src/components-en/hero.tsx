'use client';

import { motion } from 'framer-motion';
import { Clock, Apple } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">A new way to track time</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
            Track time,<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              manage life
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            TimeFlow is a simple and efficient time tracking app that helps you track daily activities, record health data, and manage your time better.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-white/90 transition-colors"
            >
              <Apple className="h-5 w-5" />
              Download on App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/5 transition-colors"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" style={{height: '20%', top: 'auto', bottom: 0}} />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3">
              <div className="rounded-[1.5rem] overflow-hidden">
                <img
                  src="/iphone/1320x2868/en/02-hero.png"
                  alt="TimeFlow App"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
