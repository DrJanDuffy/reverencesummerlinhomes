import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary = Orange CTA (Conversion-Optimized - 21% higher conversion)
        default:
          'bg-gradient-to-r from-accent-500 via-accent-500 to-accent-light text-white font-bold text-base uppercase tracking-wide shadow-cta hover:from-accent-600 hover:via-accent-600 hover:to-accent-500 hover:shadow-cta-hover hover:-translate-y-0.5 active:translate-y-0',
        // Destructive = Red for error states
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // Outline = Navy border with hover fill
        outline:
          'border-2 border-primary bg-background text-primary shadow-sm hover:bg-primary hover:text-white hover:-translate-y-0.5',
        // Secondary = Green CTA (Secondary actions)
        secondary:
          'bg-ctaSecondary-500 text-white shadow-md hover:bg-ctaSecondary-600 hover:shadow-lg hover:-translate-y-0.5',
        // Navy variant for trust elements
        navy: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary-700 hover:shadow-md hover:-translate-y-0.5',
        ghost: 'hover:bg-accent-50 hover:text-accent-600',
        link: 'text-primary underline-offset-4 hover:text-accent-500 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    // Add pulse animation to default (primary) variant for conversion optimization
    const pulseClass =
      variant === 'default' || variant === undefined ? 'animate-pulse-cta' : ''
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), pulseClass, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
