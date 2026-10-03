// Génère assets/CV-Lucas-Aguetai.pdf à partir de cv-src/cv.html
// Usage : npm install playwright && node cv-src/build.js
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const src = "file://" + path.resolve(__dirname, "cv.html");
  const out = path.resolve(__dirname, "..", "assets", "CV-Lucas-Aguetai.pdf");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(src, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
  console.log("PDF écrit :", out);
})();
