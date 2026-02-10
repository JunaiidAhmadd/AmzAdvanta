'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', loading = false, children, disabled, onClick, type = 'button', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/25',
      secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
      outline: 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
      ghost: 'text-gray-300 hover:text-white hover:bg-gray-800'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        className={classes}
        ref={ref}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
