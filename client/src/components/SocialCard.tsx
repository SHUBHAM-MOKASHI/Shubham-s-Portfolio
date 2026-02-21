import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { ExternalLink } from 'lucide-react';

interface SocialCardProps {
  name: string;
  platform: string;
  icon: IconType;
  url: string;
  color: string;
  index: number;
}

export default function SocialCard({ name, platform, icon: Icon, url, color, index }: SocialCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="block group"
    >
      <div className="glass-card p-6 rounded-2xl flex items-center justify-between group-hover:-translate-y-1 transition-transform">
        <div className="flex items-center gap-4">
          <div 
            className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors"
            style={{ color: color }}
          >
            <Icon size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{platform}</h4>
            <p className="text-sm text-muted-foreground">@{name}</p>
          </div>
        </div>
        <ExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
      </div>
    </motion.a>
  );
}
