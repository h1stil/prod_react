import type { Meta, StoryObj } from "@storybook/react";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      firstname: "admin",
      lastname: "admin",
      username: "admin",
      age: 24,
      country: Country.Russia,
      city: "Ufa",
      avatar,
      currency: Currency.RUB,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: "error",
  },
};
