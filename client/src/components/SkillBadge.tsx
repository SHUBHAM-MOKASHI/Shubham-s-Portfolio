import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  color: string;
  index: number;
}

export default function SkillBadge({ name, icon: Icon, color, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary/30 border border-white/5 hover:border-white/10 hover:bg-secondary/50 transition-all cursor-default group"
    >
      <div 
        className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" 
        style={{ color: color }}
      >
        <Icon />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
