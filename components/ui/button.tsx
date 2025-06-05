import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
        destructive: "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
        outline: "bg-transparent border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black",
        secondary: "bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black",
        ghost: "bg-transparent hover:bg-white/10 text-white",
        link: "text-white underline-offset-4 hover:underline bg-transparent",
        orange: "bg-orange-600 border-0 text-white hover:bg-orange-500 hover:text-white",
        purple: "bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black",
        green: "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
        blue: "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
