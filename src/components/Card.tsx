import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  hoverable?: boolean
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ icon: Icon, hoverable = true, className = '', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`
          section-card p-6
          ${hoverable ? '' : 'hover:border-slate-200/90 hover:shadow-sm hover:bg-slate-50/95'}
          ${className}
        `}
        whileHover={hoverable ? { y: -1 } : undefined}
        {...(props as any)}
      >
        {Icon && (
          <div className="mb-4">
            <Icon size={24} className="text-blue-700" />
          </div>
        )}
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
