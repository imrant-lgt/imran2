// // console.log("Hello,World!")

// const { log } = require('console');

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('твой возраст: ', (input) => {
//     let age = parseInt(input, 10);

//     if (isNaN(age)) {
//         console.log("Пожалуйста, введите корректный числовой возраст.");
//     } else if (age <= 40) {
//         console.log("иди гуляй");
//     } else {
//         console.log("добро пожаловать");
//     }

//     readline.close();
// });






// for(let i =0; i <= 10; i++){
//     console.log("Hello");
// }






// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }




// do {
//     console.log(j);
//     j++;   
// }while(j < 10);



// function greeting (name){
//     return "привет , " + name;
// }
// console.log(greeting("Stalin"));
// console.log(greeting("Stalbek"));




                                               //Function
//Function Declaration 
// function pow(a,b){
//     if (a==0 || b==0){
//         return;
//     }
//     return a**b;
// }
// //Function Expression 
// //let
// //const 
// //var
// const add = function(){

// }
// //Arrow Function 

// const divide = () => {

// }

// const User = {
//     age:20
//     name: 'imran' 

// }

// function element(tag){
//     const element = document.createElement(tag);
//     element.append("Hello!")
//     return element;
// }
// const root = document.getElementById('root');
// root.append(element("h1"));
// root.append(element("h2"));
// root.append(element("h3"));
// root.append(element("div"));


const itb28Arr = ['imran','Nurbol','sultan','Maksat','sultan','Samuel','Danil']

// console.log(itb28Arr[0])
// console.log(itb28Arr[5])



// // map -> returns array 
// itb28Arr.map((el, idx) => {{
//     console.log(idx + 1 + '"' + el + '"');
//     }
   
// // });


// itb28Arr.filter((item, index) => {
//     if (item !== 'Danil'){
//         console.log(item)
//     }
// })


// Object

// let obj = {
//     'name': "Vasya",
//     'age': 99,
// }

// const addField = (object, keyV, value) => {
//     let obj = {
//         ...object, 
//         [keyV]: value
//     }

//     return obj
// }

// console.log(addField(obj, "city", "Bishkek"))
// console.log(addField(obj, "street", "Manasa"))

// const sum = (...args) => {
//     let result = 7;

//     for(let i = 0; i < args.length; i++){
//         result += args[i];
//     }

//     return result;
// }

// console.log(sum('1', 2, 23, 4, 6))

// let student = {
//     ...obj,
//     grade: 2
// }

// let petrovich = {...student, name: 'Petrovich', age: 100}

// console.log(Object.entries(petrovich))

// console.log(obj.name)
// console.log(obj.age)

// Object.keys()
// console.log(Object.keys(obj)) // array [...keys]

// // Object.values()
// console.log(Object.values(obj)) // array [...values]

// // Object.entires()
// console.log(Object.entries(obj)) // array[array] [[key, values], [key, values]]

// console.log(obj.name);
// console.log(obj['name']);


// CRUD - Create, Read, Update, Delete
const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

let tasks = [];

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  tasks.push({ id: Date.now(), title: title, done: false });
  render();
  input.value = "";
});

list.addEventListener("click", event => {
  const li = event.target.closest("li");
  if (!li) return; 

  const id = Number(li.dataset.id);

  if (event.target.classList.contains("toggle-input")) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.done = !task.done; 
    }
  }
  render();
});

function render() {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.className = "toggle-input";

    li.append(checkbox, span);
    list.append(li);
  });
}

render();

























