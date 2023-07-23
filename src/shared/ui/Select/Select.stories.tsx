import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Укажите значение",
    options: [
      { value: "123", content: "первый" },
      { value: "456", content: "второй" },
    ],
  },
};
