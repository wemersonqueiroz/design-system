import { Button, ButtonProps } from "./Button"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create Account",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta

export const Default: StoryObj<ButtonProps> = {}
