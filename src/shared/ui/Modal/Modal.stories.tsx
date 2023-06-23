import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti modi consequuntur quo possimus error tenetur dicta minima? Autem soluta, veritatis culpa voluptatibus minus aperiam nihil obcaecati magni accusantium incidunt cum.",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti modi consequuntur quo possimus error tenetur dicta minima? Autem soluta, veritatis culpa voluptatibus minus aperiam nihil obcaecati magni accusantium incidunt cum.",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
