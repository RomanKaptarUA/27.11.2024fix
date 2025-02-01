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
 
//  function toggleTask(index) {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks[index].completed = !tasks[index].completed;
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      loadTasks(); // перезавантажуємо список задач
//  }
 

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





// let start = new Date();

// for (let i = 0; i < 100000; i++){
//     let doSmth = i * i * i;
// }

// let end = Date.now();
// alert(`${end - start}`)


// Date.now() === new Date().getTime;



// const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());



// let today = new Date();
// let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() +1);
// const ms = tomorrow - today;
// console.log(parseFloat(ms / 1000));

// const getAge = (birthDate) => {
//     let today = new Date();
//     let year = today.getFullYear();
    
// }





///////////////////////////////////////
//1




// let totalTime = 60 * 60;
// let timerInterval;
// const timerDisplay = document.getElementById('timerDisplay');
// const messageDisplay = document.getElementById('message');
// const startButton = document.getElementById('startButton');


// function updateTime() {
//     const hours = Math.floor(totalTime / 3600);
//     const minutes = Math.floor((totalTime % 3600) / 60);
//     const seconds = totalTime % 60;

//     timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    
//     if (totalTime <= 30 * 60 && totalTime > 29 * 60) {
//         messageDisplay.textContent = 'Залишилось менше половини часу!';
//     }
// }


// function startTimer() {
//     timerInterval = setInterval(() => {
//         totalTime--;
//         updateTime();
//         if (totalTime <= 0) {
//             clearInterval(timerInterval);
//             messageDisplay.textContent = 'Таймер завершено!';
//         }
//     }, 1000);
// }
// startButton.addEventListener('click', () => {
//     startButton.disabled = true;
//     startTimer();
// });



/////////////////////////////////////
//2



// let totalTime = 30;
// let timerInterval;
// let countdownInterval;
// const timerDisplay = document.getElementById('timerDisplay');
// const startButton = document.getElementById('startButton');

// function updateTime() {
//     const minutes = Math.floor(totalTime / 60);
//     const seconds = totalTime % 60;

//   timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

//     if (totalTime <= 10 && totalTime > 0) {
//         timerDisplay.classList.add('blinking');
//     } else {
//         timerDisplay.classList.remove('blinking');
//     }
// }


// function startTimer() {
//     startButton.disabled = true;
//     totalTime = 30;
//     updateTime(); 

//     countdownInterval = setInterval(() => {
//         totalTime--; 
//         updateTime(); 

//         if (totalTime <= 0) {
//             clearInterval(countdownInterval);
//             startButton.disabled = false;
//             startButton.textContent = 'Почати знову'; 
//         }
//     }, 1000);
// }

// startButton.addEventListener('click', () => {
//     startButton.textContent = 'Запускається...';
//     startTimer();
// });


///////////////////////////////////////////////////////////////

// Напишіть функцію, яка перевіряє,
// чи є задана дата майбутньою порівняно з поточною датою.

// function checkDate(date){
//     let today = Date.now();
//     let givenDate = new Date(date);
//     return today < givenDate;
// }
// console.log(checkDate('2025-06-01'));

////////////////////////////////////////////////////////////

//Напишіть функцію, яка обчислює скільки
//днів залишилося до наступного
//Дня народження на основі заданої дати народження.

// let = prompt('Your birthday date!');
// function birthday(birthDate) {
//     let curDate = Date.now();
//     let birthTime = new Date(`2025-${birthDate}`);
    
//     const days = Math.floor((birthTime - curDate) / (1000 * 60 * 60 * 24  ));
//     return days;
// }

// console.log(birthday(birthDate));

/////////////////////////////////////////////////////////////////

// function getDayOfMonth(year, month){
//     const nextMonth = new Date(year, month + 1, 0);
//     return nextMonth.getDate();
// }
// console.log(getDayOfMonth(2012, 1))

///////////////////////////////////////////////////////////

// Напишіть функцію, яка обчислює
// кількість робочих днів між двома заданими датами (не включаючи вихідні).

// function countBusinessDays(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if(start > end) {
//         return 0;
//     }

//     let businessDaysCount = 0;
    
//     for (let currentDay = new Date(start); currentDay <= end; currentDay.setDate(currentDay.getDate() + 1)) {
//         const dayOfWeek = currentDay.getDay();
    
//         if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//             businessDaysCount++;
//         }
//     }

//     return businessDaysCount;
//        }

// const startDate = '2025-01-15';
// const endDate = '2025-01-24'
// console.log(countBusinessDays(startDate, endDate));



//Форма реєстрації
// const savedUser = JSON.parse(localStorage.getItem('user'));
// const form = document.getElementById('registrationForm');
// const welcomeDiv = document.getElementById('welcome');

// if (savedUser) {
//     welcomeDiv.textContent = `Ласкаво просимо, ${savedUser.name}!`;
//     form.style.display = 'none';
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
    
//     const user = { name, email, password };
//     localStorage.setItem('user', JSON.stringify(user));

//     welcomeDiv.textContent = `Ласкаво просимо, ${savedUser.name}!`;
//     form.style.display = 'none';
// })

























////////////////////////////////////////////////////////////////
// ПРОМІСИ
// Юра Глуханюк

// const isActive = true;

// const one = new Promise((resolve, reject) => {
// setTimeout(() => {
//     if(isActive) {
//         resolve('Person is active')
//     } else {
//         reject('Person isn*t active')
//     }

// }, 2000)
// });

// console.log('Before one.then()');

// one.then(
//     Resolve one.then()')
//         console.log(valvalue => {
//         console.log('onue);
//     },
//     error => {
//         console.log('onReject one.then()')
//         console.log(error);
//     }
// )

// console.log('After one.then()');

// one
// .then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.log(error);
// })
// // використовуємо .finally() після завершення дії//
// .finally(() => console.log('Promise settled'));






// ///////////////////////////////////

// function updateCountdownTimer(selector, targetDate) {
//     const timerElement = document.querySelector(selector);
  
//     const now = new Date();
//     const time = targetDate - now;
  
//     if (time <= 0) {
//       clearInterval(timerInterval);
//       return;
//     }
  
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
  
//     displayTime(timerElement, days, hours, mins, secs);
//   }
  
//   function displayTime(timerElement, days, hours, mins, secs) {
//     const dayElement = timerElement.querySelector('[data-value="days"]');
//     const hourElement = timerElement.querySelector('[data-value="hours"]');
//     const minElement = timerElement.querySelector('[data-value="mins"]');
//     const secElement = timerElement.querySelector('[data-value="secs"]');
  
//     dayElement.textContent = days;
//     hourElement.textContent = hours.toString().padStart(2, '0');
//     minElement.textContent = mins.toString().padStart(2, '0');
//     secElement.textContent = secs.toString().padStart(2, '0');
//   }
  
//   const targetDate = new Date('June 1, 2025');
  
//   const timerInterval = setInterval(() => {
//     updateCountdownTimer('#timer-1', targetDate);
//   }, 1000);
  
//   updateCountdownTimer('#timer-1', targetDate);

// const fetchUser = (userName, onSuccess, onError) => {
//   setTimeout(() => {
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value')
//     } else {
//       onError('error');
//     }
//   }, 1500);
// }

// const onFetchSuccess = user => {
//   console.log(user);
// } 

// const onFetchError = error => {
//   console.log(error);
// };

// fetchUser("Bob", onFetchSuccess, onFetchError);


// const fetchUser = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching ${username}`);
    
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve('Success value')
//       } else {
//         reject('error')
//       }
//     }, 1500)
//   })
// }

// fetchUser("Bob")
// .then(user => console.log(user))
// .catch(user => console.error(error));

// function  addNumbers(a, b){
//   return new Promise((resolve, reject) => {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         reject('Невірні дані!')
//     } else {
//         resolve(a + b)
//     }
//   })
// }

// addNumbers(25, 66)
// .then(result => console.log(`Result: ${result}`))
// .catch(result => console.error(`Result: ${error}`))

///////////////////////////////////////////////////////

// function checkEven(numbers) {
// return new Promise((resolve, reject) => {
//   if(!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')){
//     reject('невірні дані!')
//   } else if(numbers.some(num => num % 2 !== 0)){
//     reject('непарні числа!')
//   } else {
//      resolve('Все вірно!')
//   }
// }) 
// }
// const numbers = [2, 4, 6, 8, 10];

// checkEven(numbers)
// .then(message => console.log('Успіх: ', message))
// .then(error => console.error(error)); //Слава УкраЇні!


















////////////////////////////////////////////////////////////////////

//1
// Напиши функцію delay(ms),
//  яка повертає проміс,
//  що переходить в стан "resolved"
//  через ms мілісекунд. Значенням промісу,
//  яке виповнилося має бути та кількість мілісекунд,
//  яку передали під час виклику функції delay.



const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
};

const logger = time => console.log(`Resolved after ${time} ms`);



delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
///////////////////////////////////////////////////////////////////////////
//2
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

   return new Promise((resolve, reject) => {
    setTimeout(() => {
        const canProcess = Math.random() > 0.3;
    
        if (canProcess) {
          resolve ({ id: transaction.id, time: delay });
        } else {
      reject (transaction.id);
        }
      }, delay);
   })
  }

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);