const currDate = new Date();

function daysInMonth() {
  return new Date(
    currDate.getFullYear(),
    currDate.getMonth() + 1,
    0
  ).getDate();
}

function dayClick(e) {
  const $day = e.target;

  const old = document.querySelector(".selected");

  if (old) old.classList.remove("selected");

  $day.classList.add("selected");

  console.log(e.target.innerText);

  document.querySelector("#selection").innerText =
    e.target.innerText;
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
  $day.addEventListener("click", dayClick);
  $calendar.appendChild($day);
}
