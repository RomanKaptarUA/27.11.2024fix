// import Handlebars from 'handlebars';

// const users = [
//    { name: "Олексій", age: 30, city: "Чернівці" },
//    { name: "Юра", age: 14, city: "Валя-Кузьмина" },
//    { name: "Юля", age: 15, city: "Львів" },
// ];

// const templateSource = `
// <ul>
//   {{#each this}}
//   <li>{{name}}, {{age}} років, {{city}}</li>
//   {{/each}}
// </ul>
// `;

// const template = Handlebars.compile(templateSource);

// document.getElementById("app").innerHTML = template(users);

// const filteredData = (query) => {
//     const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
//     document.getElementById("app").innerHTML = template(filteredUsers);
// };

// document.getElementById('search').addEventListener('input', (e) => {
//     filteredData(e.target.value)
// })

// 1
// function setAlert() {
//     const startButton = document.getElementById('btn');
//     let count = 0;
//     const intervalId = setInterval(() => {
//         count++;
//         alert(`Повідомлення ${count}`);
//         if (count === 5) {
//             clearInterval(intervalId);
//             alert('Таймер зупинено');
//         }
//     }, 1000);

// }

// document.getElementById('btn').addEventListener('click', () => (setAlert()));

// 2
// const box = document.getElementById('box');
// const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
// let colorIndex = 0;
// function changeColor() {
//     box.style.backgroundColor = colors[colorIndex];

// colorIndex = (caolorIndex + 1) % colors.length;
// }
// setInterval(changeColor, 2000);

// 3
// function startGame() {
//     const gameArea = document.getElementById('gameArea');
//     const scoreDisplay = document.getElementById('score');
//     let score = 0;
//     const gameDuration = 10000;
//     let gameInterval;

//     function createTarget() {
//         const target = document.createElement('div');
//         target.className = 'target';

//         const maxX = gameArea.clientWidth - 50;
//         const maxY = gameArea.clientHeight - 50;
//         target.style.left = `${Math.random() * maxX}px`;
//         target.style.top = `${Math.random() * maxY}px`;

//         target.addEventListener('click', () => {
//             score++;
//             scoreDisplay.textContent = `Очки: ${score}`;
//             target.remove();
//         });

//         gameArea.appendChild(target);

//         setTimeout(() => target.remove(), 2000);
//     }

//     gameInterval = setInterval(createTarget, 1000);

//     setTimeout(() => {
//         clearInterval(gameInterval);
//         gameArea.innerHTML = "";
//         scoreDisplay.textContent = `Гру завершено! Ваші очки: ${score}`;
//     }, gameDuration);
// }

// startGame();

// 4
// document.addEventListener("DOMContentLoaded", () => {
//     const timeInput = document.getElementById("timeInput");
//     const output = document.getElementById("output");
//     let timerId;

//     timeInput.addEventListener("input", () => {
//         const time = parseInt(timeInput.value);

//         clearTimeout(timerId);
//         if(isNaN(time) || time <= 0){
//             output.textContent = 'Введіть коректні дані';
//             return
//         }

//         output.textContent = `Таймер запущено! Очікуйте ${time} секунд...`;
//         timerId = setTimeout(() => {
//             output.textContent = 'Час вийшов! Ось ваші дані!'
//         }, time*1000)
//     })
// })

// import { saveFormData } from './formData.js';

// const feedbackForm = document.getElementById('feedbackForm');

// feedbackForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     saveFormData({ name, email, message });

//     document.getElementById('successMessage').classList.remove('hidden');

//     feedbackForm.reset();
// });

// let seconds = 0;
// let timer = setInterval(function() {
//     seconds++;
//     console.log(seconds);
// }, 1000);

// let seconds = 15;
// let timer = setTimeout(function() {
//     console.log('Finish')
// }, seconds * 1000);

const display = document.getElementById("stopwatch-display");
const startBtn = document.getElementById("start-stopwatch");
const pauseBtn = document.getElementById("pause-stopwatch");
const resetBtn = document.getElementById("reset-stopwatch");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lastUpdate = 0;

function formatTime(ms) {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60 * 60)) / 1000);
  const milliseconds = Math.floor(ms % 1000);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
    3,
    "0"
  )}`;
}

function updateDisplay() {
  const currentTime = performance.now();
  elapsedTime = currentTime - lastUpdate + elapsedTime;
  lastUpdate = currentTime;

  display.textContent = formatTime(Math.round(elapsedTime));
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");

  lastUpdate = performance.now();
  timerInterval = setInterval(updateDisplay, 10);
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");

  clearInterval(timerInterval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00.000";

  startBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
});
