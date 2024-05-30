import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./__tests__",
  reporter: [
    ["list", { printSteps: true }]
  ],
  use: {
    baseURL: "https://www.demoblaze.com/",
    trace: "on-first-retry", 
  },

  projects: [
    {
      name: "chromium",
      use: { 
        ...devices["Desktop Chrome"],
        launchOptions: { args: ["--headless=chrome"] }
      },
    }
  ]
})
