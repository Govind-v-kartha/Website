import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>}
          <input
            ref={ref}
            className={`
              w-full h-12 border-2 border-slate-200 rounded-lg px-4 py-3
              text-base text-slate-900 placeholder-slate-400
              transition-all duration-200
              focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100
              hover:border-slate-300
              disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
              ${icon ? 'pl-12' : ''}
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
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <motion.textarea
          ref={ref}
          className={`
            w-full min-h-32 border-2 border-slate-200 rounded-lg px-4 py-3
            text-base text-slate-900 placeholder-slate-400
            transition-all duration-200 resize-none
            focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100
            hover:border-slate-300
            disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}
            ${className}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          {...(props as any)}
        />
        {error && (
          <motion.p
            className="text-sm text-red-600 mt-2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
