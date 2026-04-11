import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  children: React.ReactNode
}

const variantClasses = {
  primary: 'bg-slate-900 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md',
  secondary: 'bg-slate-50 text-slate-800 border border-slate-300 hover:bg-white hover:border-blue-200 active:bg-slate-100',
  tertiary: 'text-blue-700 hover:text-blue-800 hover:bg-blue-50/70 active:bg-blue-100/70 rounded-md px-1.5 -mx-1.5 underline-offset-2 hover:underline',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-base',
}

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
      type = 'button',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        className={`
          font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          focus-ring
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        whileHover={!disabled && !isLoading ? { scale: 1.015, y: -1 } : undefined}
        whileTap={!disabled && !isLoading ? { scale: 0.99 } : undefined}
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
    )
  }
)

Button.displayName = 'Button'
