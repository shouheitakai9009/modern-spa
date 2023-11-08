// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { TestComponent } from "./";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const AddNewBook: Story = {
  render: () => <TestComponent />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchField = canvas.getByRole("textbox");
    await userEvent.type(searchField, "test");
    expect((searchField as HTMLInputElement).value).toBe("test");
  },
};
