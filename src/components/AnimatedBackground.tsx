import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f7ff]">
      <motion.div
        animate={{
          x: ['0%', '8%', '-4%', '0%'],
          y: ['0%', '-6%', '4%', '0%'],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-200/50 blur-[100px]"
      />
      <motion.div
        animate={{
          x: ['0%', '-6%', '8%', '0%'],
          y: ['0%', '8%', '-6%', '0%'],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-200/40 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ['0%', '10%', '-10%', '0%'],
          y: ['0%', '-10%', '10%', '0%'],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px]"
      />
    </div>
  );
}
