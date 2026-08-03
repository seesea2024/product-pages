'use client';

import { motion } from 'framer-motion';

const screenshots = [
  {
    title: 'Timeline',
    description: 'Visualize daily activities',
    src: '/iphone/1320x2868/en/01-device-bottom.png',
  },
  {
    title: 'Analytics',
    description: 'Understand time allocation',
    src: '/iphone/1320x2868/en/02-hero.png',
  },
  {
    title: 'Tags',
    description: 'Organize activities flexibly',
    src: '/iphone/1320x2868/en/03-device-top.png',
  },
];

export function Screenshots() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Beautiful Design</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Native Apple design style with smooth animations and delicate interactions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-1 max-w-xs"
            >
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{screenshot.title}</h3>
                <p className="text-white/60 text-sm">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
