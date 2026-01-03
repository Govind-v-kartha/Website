import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ icon: Icon, hoverable = true, className = '', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`
          bg-white border border-slate-200 rounded-xl p-6
          transition-all duration-200
          ${hoverable ? 'hover:shadow-md hover:border-slate-300' : ''}
          ${className}
        `}
        whileHover={hoverable ? { y: -2 } : {}}
        {...(props as any)}
      >
        {Icon && (
          <div className="mb-4">
            <Icon size={24} className="text-blue-600" />
          </div>
        )}
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
