'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  BarChart3,
  Tag,
  Mic,
  Cloud,
  Camera,
  HeartPulse,
  Download,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Timeline View',
    description: 'View all activity records by day, week, month, and year, clearly understand where your time goes.',
    color: '#007AFF',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Beautiful charts showing time allocation trends, gain deep insights into your time usage habits.',
    color: '#FF9500',
  },
  {
    icon: Tag,
    title: 'Tag Management',
    description: 'Custom tag categories to easily organize different types of activities at a glance.',
    color: '#AF52DE',
  },
  {
    icon: Mic,
    title: 'Siri Integration',
    description: 'Support voice shortcuts, quickly record time without opening the app.',
    color: '#FF2D55',
  },
  {
    icon: Cloud,
    title: 'iCloud Sync',
    description: 'Automatic cross-device sync, data safe and reliable, access anytime anywhere.',
    color: '#34C759',
  },
  {
    icon: Camera,
    title: 'OCR Scan',
    description: 'Quickly recognize blood pressure monitor data, easily record health information.',
    color: '#5AC8FA',
  },
  {
    icon: HeartPulse,
    title: 'Health Tracking',
    description: 'Track blood pressure, weight and other health data, comprehensively manage personal health.',
    color: '#FF3B30',
  },
  {
    icon: Download,
    title: 'Data Export',
    description: 'Support PDF export for easy sharing and archiving.',
    color: '#8E8E93',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Powerful Features</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Simple but not simplistic, TimeFlow provides all the features you need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
