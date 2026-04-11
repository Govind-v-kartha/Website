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
  primary:
    'bg-[#38BDF8] text-white hover:bg-[#0EA5E9] active:bg-[#0284C7] border border-[#38BDF866] shadow-[0_0_28px_rgba(0,180,255,0.35)]',
  secondary:
    'bg-[#0B1020] text-slate-200 border border-[#1E293B] hover:border-[#38BDF866] hover:text-white hover:bg-[#111827]',
  tertiary:
    'text-[#38BDF8] border border-[#38BDF84d] hover:bg-[#38BDF81A] hover:text-white',
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
          font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          focus-ring
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        whileHover={!disabled && !isLoading ? { scale: 1.01, y: -1 } : undefined}
        whileTap={!disabled && !isLoading ? { scale: 0.99 } : undefined}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
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
