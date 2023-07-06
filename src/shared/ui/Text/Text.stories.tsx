import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Title",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    text: "Text",
    title: "Title",
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    text: "Text",
    title: "Title",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
