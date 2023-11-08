import type { Preview } from "@storybook/react";
import React from "react";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@radix-ui/themes/styles.css";
import "../src/index.css";

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme
        accentColor="purple"
        panelBackground="solid"
        radius="large"
        appearance="light"
      >
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </RecoilRoot>
      </Theme>
    ),
  ],
};

export default preview;
