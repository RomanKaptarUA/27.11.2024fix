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






// Таймер
// const display = document.getElementById("stopwatch-display");
// const startBtn = document.getElementById("start-stopwatch");
// const pauseBtn = document.getElementById("pause-stopwatch");
// const resetBtn = document.getElementById("reset-stopwatch");

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let lastUpdate = 0;

// function formatTime(ms) {
//   const hours = Math.floor(ms / (1000 * 60 * 60));
//   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((ms % (1000 * 60 * 60)) / 1000);
//   const milliseconds = Math.floor(ms % 1000);

//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//     2,
//     "0"
//   )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
//     3,
//     "0"
//   )}`;
// }

// function updateDisplay() {
//   const currentTime = performance.now();
//   elapsedTime = currentTime - lastUpdate + elapsedTime;
//   lastUpdate = currentTime;

//   display.textContent = formatTime(Math.round(elapsedTime));
// }

// startBtn.addEventListener("click", () => {
//   startBtn.classList.add("hidden");
//   pauseBtn.classList.remove("hidden");
//   resetBtn.classList.remove("hidden");

//   lastUpdate = performance.now();
//   timerInterval = setInterval(updateDisplay, 10);
// });

// pauseBtn.addEventListener("click", () => {
//   pauseBtn.classList.add("hidden");
//   startBtn.classList.remove("hidden");

//   clearInterval(timerInterval);
// });

// resetBtn.addEventListener("click", () => {
//   clearInterval(timerInterval);
//   elapsedTime = 0;
//   display.textContent = "00:00:00.000";

//   startBtn.classList.remove("hidden");
//   pauseBtn.classList.add("hidden");
//   resetBtn.classList.add("hidden");
// });



// Таймер 1
// let timer = 10000;
// const timerEl = document.getElementById('timer');

// const timerInterval = setInterval(() => {
//   timer -= 1000;
//   timerEl.textContent = (timer / 1000).toFixed(0);

//   if(timer <= 5000) {
//     document.body.style.backgroundColor = 'yellow';
//   }

//   if(timer <=0) {
//     clearInterval(timerInterval)
//     timerEl.textContent = '0';
//   }
// }, 1000);












//  // Завантажуємо задачі із localStorage при завантаженні сторінки
//  document.addEventListener('DOMContentLoaded', loadTasks);
 
//  function loadTasks() {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      const taskList = document.getElementById('task-list');
//      taskList.innerHTML = ''; // очищаємо список перед додаванням нових задач
 
//      tasks.forEach((task, index) => {
//          const li = document.createElement('li');
//          li.classList.toggle('completed', task.completed);
         
//          li.innerHTML = `
//              <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
//              ${task.text}
//              <button onclick="removeTask(${index})">Видалити</button>
//          `;
         
//          taskList.appendChild(li);
//      });
//  }
 
//  // Додаємо нову задачу
//  function addTask() {
//      const input = document.getElementById('task-input');
//      const taskText = input.value.trim();
 
//      if (taskText === '') {
//          return; // Якщо введено порожній текст, не додаємо задачу
//      }
 
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks.push({ text: taskText, completed: false });
//      localStorage.setItem('tasks', JSON.stringify(tasks));
 
//      input.value = ''; // очищуємо поле вводу
//      loadTasks(); // перезавантажуємо список задач
//  }
 
//  // Перемикаємо статус задачі (виконано / не виконано)
//  function toggleTask(index) {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks[index].completed = !tasks[index].completed;
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      loadTasks(); // перезавантажуємо список задач
//  }
 
//  // Видаляємо задачу
//  function removeTask(index) {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks.splice(index, 1); // видаляємо задачу з масиву
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      loadTasks(); // перезавантажуємо список задач
//  }














// 1

// const taskForm = document.getElementById('taskForm');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');


// let tasks = JSON.parse(localStorage.getItem('tasks'));


// function renderTasks() {
//     taskList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.classList.toggle('completed', task.completed);

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.completed;
//         checkbox.classList.add('checkbox');
//         checkbox.onclick = () => toggleTaskCompletion(index);

//         const taskText = document.createElement('span');
//         taskText.textContent = task.text;

//         li.appendChild(checkbox);
//         li.appendChild(taskText);
//         taskList.appendChild(li);
//     });
// }

// taskForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const newTask = {
//         text: taskInput.value,
//         completed: false,
//     };

//     tasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     taskInput.value = '';
//     renderTasks();
// });


// function toggleTaskCompletion(index) {
//     tasks[index].completed = !tasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     renderTasks();
// }

// renderTasks();





// //////////////2
// function createTestUser() {
//     const user = {
//         username: 'testuser',
//         password: 'password123'
//     };
//     localStorage.setItem('user', JSON.stringify(user));
// }
// window.onload = function() {
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser) {
        
//         alert('Вітаємо, ' + storedUser.username);
//         document.getElementById('login-form').style.display = 'none';
//     }
// };
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.username === username && storedUser.password === password) {
//         alert('Вхід успішний!');
//         document.getElementById('login-form').style.display = 'none'; 
//         document.getElementById('error-message').style.display = 'none'; 
   
//     } else {
//         document.getElementById('error-message').style.display = 'block';
//     }
// });








// // 3
// function addContact() {
//     const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
//     const bookmarkList = document.getElementById('bookmark-list');
//     bookmarkList.innerHTML = '';

//     bookmarks.forEach((bookmark, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
//         bookmarkList.appendChild(li);
//     });
// }

// document.getElementById('bookmark-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const url = document.getElementById('url').value;
//     const title = document.getElementById('title').value;

//     const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     bookmarks.push({ url, title });

//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//     addContact();

//     document.getElementById('url').value = '';
//     document.getElementById('title').value = '';
// });








// 4
// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
//     const firstNameInput = document.getElementById('firstName');
//     const lastNameInput = document.getElementById('lastName');
//     const phoneInput = document.getElementById('phone');
//     const emailInput = document.getElementById('email');
//     const contactsList = document.getElementById('contactsList');


//     let contacts = JSON.parse(localStorage.getItem('contacts')) || [];


//     function renderContacts() {
//         contactsList.innerHTML = '';

//         contacts.forEach((contact, index) => {
//             const li = document.createElement('li');
//             li.textContent = `${contact.firstName} ${contact.lastName} — ${contact.phone} — ${contact.email}`;


//             const editBtn = document.createElement('button');
//             editBtn.textContent = 'Редагувати';
//             editBtn.onclick = () => editContact(index);

//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Видалити';
//             deleteBtn.onclick = () => deleteContact(index);

//             li.appendChild(editBtn);
//             li.appendChild(deleteBtn);
//             contactsList.appendChild(li);
//         });
//     }

//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const newContact = {
//             firstName: firstNameInput.value,
//             lastName: lastNameInput.value,
//             phone: phoneInput.value,
//             email: emailInput.value,
//         };

//         contacts.push(newContact);
//         localStorage.setItem('contacts', JSON.stringify(contacts));

//         contactForm.reset();
//         renderContacts();
//     });


//     function editContact(index) {
//         const contact = contacts[index];
//         firstNameInput.value = contact.firstName;
//         lastNameInput.value = contact.lastName;
//         phoneInput.value = contact.phone;
//         emailInput.value = contact.email;

//         contactForm.onsubmit = function(event) {
//             event.preventDefault();

//             contacts[index] = {
//                 firstName: firstNameInput.value,
//                 lastName: lastNameInput.value,
//                 phone: phoneInput.value,
//                 email: emailInput.value,
//             };

//             localStorage.setItem('contacts', JSON.stringify(contacts));
//             contactForm.reset();
//             renderContacts();

//             contactForm.onsubmit = function(event) {
//                 event.preventDefault();
//                 const newContact = {
//                     firstName: firstNameInput.value,
//                     lastName: lastNameInput.value,
//                     phone: phoneInput.value,
//                     email: emailInput.value,
//                 };

//                 contacts.push(newContact);
//                 localStorage.setItem('contacts', JSON.stringify(contacts));
//                 contactForm.reset();
//                 renderContacts();
//             };
//         };
//     }


//     function deleteContact(index) {
//         if (confirm('Ви впевнені, що хочете видалити цей контакт?')) {
//             contacts.splice(index, 1);
//             localStorage.setItem('contacts', JSON.stringify(contacts));
//             renderContacts();
//         }
//     }
//     renderContacts();
// });











// const date = new Date();
//  console.log(date); // Wed Jan 15 2025 20:13:53 GMT+0200 (за східноєвропейським стандартним часом)

// let ms = Date.parse('2025-01-14T13:52:20.423');
// alert(ms);

// const date1 = new Date('January 16, 2025');
// console.log(date1);


// const date2 = new Date(2021, 9, 10, 12, 15, 50, 4);
// console.log(date2);

// const date = new Date(1750000000000);
// console.log(date);

// const date = Date.now();
// console.log(date) //1736966082052 скільки міліседунд пройшло після 1 січня 1970


// const date = new Date();
// console.log('Date: ' + date);

// console.log("Date: " + date.getDate()); // Date: 15
// console.log("Date: " + date.getDay()); // Date: 3 починаючи з неділі
// console.log("Date: " + date.getMonth()); // Date: 0









// GET
// const date = new Date();
// console.log(`Час в мілісекундах віж 1 січня 1970 року: ${date.getTime()}`);

// let result = 'Date: ';
// result += date.getFullYear() + '/';
// result += date.getMonth() + '/';
// result += date.getDate() + '.';

// result += 'Time: ' + date.getHours() + ':'
// result += date.getMinutes() + ':';
// result += date.getSeconds() + '.';
// result += date.getMilliseconds() + '.';

// console.log(result);





// SET
// const date = new Date(2025, 0, 15, 21, 0, 0, 0);
// console.log(date.getTime()); // 1736967600000

// const secondsDate = new Date();
// secondsDate.setFullYear(2026, 2, 7);
// console.log(secondsDate);

// let date = new Date();

// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// }

// const locateUk = date.toLocaleDateString('Uk-uk', options);
// console.log(locateUk); // середу, 15 січ. 2025 р., 21:14

// const locateUs = date.toLocaleString('en-US', options);
// console.log(locateUs); // Wednesday, Jan 15, 2025, 09:14 PM





let start = new Date();

for (let i = 0; i < 100000; i++){
    let doSmth = i * i * i;
}

let end = Date.now();
alert(`${end - start}`)


// Date.now() === new Date().getTime;



// const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());



// let today = new Date();
// let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() +1);
// const ms = tomorrow - today;
// console.log(parseFloat(ms / 1000));

const getAge = (birthDate) => {
    let today = new Date();
    let year = today.getFullYear();
    
}