import type { Preview } from "@storybook/nextjs-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/styles/globals.css";
import { http, HttpResponse } from "msw";
/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [
        // Mocking an image upload endpoint
        http.post("/api/images", () => {
          return HttpResponse.json({
            success: true,
            message: "Image uploaded successfully",
            filename: `image-${Date.now()}`,
            url: `https://picsum.photos/200?${Date.now()}`,
          });
        }),
      ],
    },
  },
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
};

export default preview;
