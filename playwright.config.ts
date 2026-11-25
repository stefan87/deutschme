import { defineConfig } from "@playwright/test";
const executablePath = process.env.CHROMIUM_PATH;
export default defineConfig({
  testDir: "tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: "http://localhost:4173",
    browserName: "chromium",
    launchOptions: {
      executablePath,
      args: [
        "--use-fake-device-for-media-stream",
        "--use-fake-ui-for-media-stream",
      ],
    },
  },
  webServer: {
    command: "npm run dev -- --port 4173 --strictPort",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
});
