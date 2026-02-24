const { exec } = require("child_process");

exec(
  "zip -r allure-report.zip allure-report",
  { maxBuffer: 1024 * 1024 * 50 }, // 50 MB
  (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Failed to zip Allure report", error);
      process.exit(1);
    }
    console.log("✅ Allure report zipped successfully");
  }
);