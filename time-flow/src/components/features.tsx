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
    title: '时间轴视图',
    description: '按日、周、月、年直观查看所有活动记录，清晰了解时间去向。',
    color: '#007AFF',
  },
  {
    icon: BarChart3,
    title: '数据分析',
    description: '精美图表展示时间分配趋势，深入了解自己的时间使用习惯。',
    color: '#FF9500',
  },
  {
    icon: Tag,
    title: '标签管理',
    description: '自定义标签分类，轻松组织不同类型的活动，一目了然。',
    color: '#AF52DE',
  },
  {
    icon: Mic,
    title: 'Siri 集成',
    description: '支持语音快捷指令，无需打开应用即可快速记录时间。',
    color: '#FF2D55',
  },
  {
    icon: Cloud,
    title: 'iCloud 同步',
    description: '跨设备自动同步，数据安全可靠，随时随地访问。',
    color: '#34C759',
  },
  {
    icon: Camera,
    title: 'OCR 扫描',
    description: '快速识别血压计数据，轻松记录健康信息。',
    color: '#5AC8FA',
  },
  {
    icon: HeartPulse,
    title: '健康记录',
    description: '追踪血压、体重等健康数据，全面管理个人健康。',
    color: '#FF3B30',
  },
  {
    icon: Download,
    title: '数据导出',
    description: '支持 PDF 格式导出，方便分享和存档。',
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
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">强大功能</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            简洁而不简单，TimeFlow 提供你所需的一切功能
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
