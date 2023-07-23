import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
