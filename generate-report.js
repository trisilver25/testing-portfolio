const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./reports/",
  reportPath: "./reports/html/",
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "MacOS",
      version: "26.4.1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Portfolio Automation" },
      { label: "Release", value: "0.1" },
    ],
  },
});


