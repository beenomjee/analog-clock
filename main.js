const minuteBarsElement = document.querySelector(".minute-bars");
const createMinuteBars = () => {
  let html = minuteBarsElement.innerHTML;
  for (let index = 0; index < 30; index++) {
    html = `<hr style='--rotate: ${index * 6}deg' />` + html;
  }
  minuteBarsElement.innerHTML = html;
};
createMinuteBars();

// hands Controller
const hourHand = document.querySelector(".hourHand span");
const minutesHand = document.querySelector(".minutesHand span");
const secondsHand = document.querySelector(".secondHand span");
const setTime = () => {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();
  secondsHand.style.setProperty("--rotate", `${6 * second + 180}deg`);
  minutesHand.style.setProperty("--rotate", `${6 * minute + 180}deg`);
  hourHand.style.setProperty("--rotate", `${30 * hour + minute / 2 + 180}deg`);
};
setInterval(setTime, 1000);
