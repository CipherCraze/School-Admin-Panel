import React from 'react'
import { cn } from '../../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-xl sm:rounded-2xl border border-secondary-200/50 bg-white/80 backdrop-blur-sm shadow-soft',
        glass && 'glass-effect',
        hover && 'card-hover cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-4 sm:p-6 pb-0', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export function CardTitle({ children, className, gradient = false }: CardTitleProps) {
  return (
    <h3 className={cn(
      'text-lg sm:text-xl font-bold text-secondary-900',
      gradient && 'gradient-text',
      className
    )}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('text-secondary-700 p-4 sm:p-6 pt-0', className)}>
      {children}
    </div>
  )
}
