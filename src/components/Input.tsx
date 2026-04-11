import React from 'react'
import { motion } from 'framer-motion'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            {label}
            {props.required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}
        <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
          {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>}
          <input
            ref={ref}
            className={`
              w-full h-11 border border-slate-300 rounded-lg px-4 py-2.5
              text-sm text-slate-900 placeholder-slate-500 bg-slate-50/95
              transition-all duration-200
              focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200
              hover:border-blue-300 hover:bg-white
              disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed
              focus-ring
              ${icon ? 'pl-11' : ''}
              ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}
              ${className}
            `}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            className="text-sm text-red-600 mt-2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            {label}
            {props.required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}
        <motion.textarea
          ref={ref}
          className={`
            w-full min-h-32 border border-slate-300 rounded-lg px-4 py-3
            text-sm text-slate-900 placeholder-slate-500 bg-slate-50/95
            transition-all duration-200 resize-none
            focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200
            hover:border-blue-300 hover:bg-white
            disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed
            focus-ring
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}
            ${className}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          {...(props as any)}
        />
        {error && (
          <motion.p
            className="text-sm text-red-600 mt-2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
