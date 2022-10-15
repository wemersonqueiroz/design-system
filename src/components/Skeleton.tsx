import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface ComponentProps {
  children: ReactNode
  asChild?: boolean
}

export function Component({ children, asChild }: ComponentProps) {
  const Comp = asChild ? Slot : "div"
  return <Comp className={clsx("text-gray-100 font-sans", {})}>{children}</Comp>
}
