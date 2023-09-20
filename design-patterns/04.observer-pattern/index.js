import observer from "./observable.js";
import "./analytics.js";
const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

console.log(pinkBtn);
pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  console.log("abc");
  observer.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  console.log("xyz");
  observer.notify(data);
});
