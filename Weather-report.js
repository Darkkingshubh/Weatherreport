// Write code below 💖
const maxhr = 24;
const minhr = 0;

let hour = Math.random();
let hours = Math.floor(hour * (maxhr - minhr + 1)) + minhr;

if (hours < 12) {
  console.log("Good morning 🌞");
} else {
  console.log("Good afternoon ☁️");
}