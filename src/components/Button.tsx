import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950',
  secondary: 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 active:bg-slate-300',
  tertiary: 'text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline'
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-base'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      isLoading = false,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={`
          font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
        ) : Icon && iconPosition === 'left' ? (
          <Icon size={18} />
        ) : null}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && !isLoading && <Icon size={18} />}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
