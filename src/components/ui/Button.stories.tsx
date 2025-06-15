import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
}; 