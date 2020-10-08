const currDate = new Date();

function daysInMonth() {
  return new Date(
    currDate.getFullYear(),
    currDate.getMonth() + 1,
    0
  ).getDate();
}

const $heading = document.querySelector("h1");

const $calendar = document.querySelector(
  "#calendar"
);

$heading.innerText = currDate.toLocaleString(
  "default",
  { month: "long" }
);

const numOfDays = daysInMonth();

for (let i = 0; i < numOfDays; i++) {
  const $day = document.createElement("div");
  $day.classList.add("day");
  $day.innerText = i + 1;
  $calendar.appendChild($day);
}
