let otherlinks = document.querySelector(".other-links");
let megaMenu = document.querySelector(".mega-menu");

otherlinks.addEventListener("click", function () {
  megaMenu.classList.toggle("show");
});

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let DateNow = new Date().getTime();

  let dateDiff = countDownDate - DateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 500);

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

let stats = document.querySelector(".stats");
let spanNumbers = document.querySelectorAll(".stats .number");
started = false;

window.onscroll = function () { };

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      spanNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}