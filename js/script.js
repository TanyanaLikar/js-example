
// const message = "JavaScript is awesome!";
// console.log(message);
// filterArray([12, 24, 8, 41, 76], 20)


// function filterArray(numbers, value) {
//     // Change code below this line
//   const newArray = [];
//  for (const number of numbers){
   
//  if (number > value){
//      newArray.push(number);     
//  }
//  }
//  console.log(newArray);
 
   
//  }
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//     //   console.log(key);
//       console.log(book[key]);
//     }
  
//     // Если это не собственное свойство - ничего не делаем
//   }
//  
// ==================================Верное решение задача 12 модуль3 ==============
    // function countProps(object) {
    //     let propCount = 0;
       
    //     for (const key in object){
    //         if (object.hasOwnProperty(key)){
    //             propCount += 1;
    //         }
    //     }
        
    //     // return propCount;
    //     console.log(propCount);
    //   }
    //  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
     // ==================================Верное решение задача 12 модуль3 ==============
    // ==================================Верное решение задача 13 модуль3 ==============
    //  const apartment = {
    //     descr: "Spacious apartment in the city center",
    //     rating: 4,
    //     price: 2153,
    //   };
    //   const values = [];
    //   // Change code below this line
      
    //   const keys = Object.keys(apartment);
    //   for (const key of keys){
    //     values.push(apartment[key]);
    //   }
    //   console.log(apartment);
    //   console.log(values);      
      // ==================================Верное решение задача 13 модуль3 ==============


    //   Верное решение задачи 14 модуль 3 -Подсчёт свойств 2.0 другим сбособом - решение задачи 12

    //   function countProps(object) {
    //     // Change code below this line
    //     let propCount = 0;
    //   const keys = Object.keys(object);
    //     for (const key of keys) {
    //       {
    //         propCount += 1;
    //       }
    //     }
      
    //            console.log(propCount);      
    //   }
    //   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
    // ==============================Задача 14модуль3=================

    // ========================= Верное решение задача 16 модуль3 =================
    // function countTotalSalary(salaries) {
    //     let totalSalary = 0;
        
    //   const values = Object.values(salaries);
    //   for (const value of values){
    //     totalSalary += value;
    //   }
    //     console.log(values);
    //     console.log(totalSalary) ;
    //   }
    //   countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
    //   countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
    //    ============================== задача 16 модуль3================
    // ========================= Верное решение задача 17 модуль3 =================
    // const colors = [
    //     { hex: "#f44336", rgb: "244,67,54" },
    //     { hex: "#2196f3", rgb: "33,150,243" },
    //     { hex: "#4caf50", rgb: "76,175,80" },
    //     { hex: "#ffeb3b", rgb: "255,235,59" },
    //   ];
    //   console.log(colors);
    //   const hexColors = [];
    //   const rgbColors = [];
    //   for (const color of colors){
    //     hexColors.push(color.hex);
    //     rgbColors.push(color.rgb);  
    //     };
    // console.log(rgbColors);
    // console.log(hexColors);
    //    ============================== задача 17 модуль3================
    // ========================= Верное решение задача 18 модуль3 =================
  //   const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];
  //   console.log(products);
  //   function getProductPrice(productName) {
  //     // Change code below this line
  //   for (const product of products){
  //   if (productName === product.name){
  //     return product.price
  //   } else {
    
  //   } return null
  //  }
  //   }
  // ========================= Верное решение задача 19 модуль3 =================
  // const products = [
  //   { name: "Radar", price: 1300, quantity: 4 },
  //   { name: "Scanner", price: 2700, quantity: 3 },
  //   { name: "Droid", price: 400, quantity: 7 },
  //   { name: "Grip", price: 1200, quantity: 9 },
  // ];
   
  // const propNames = [];
  //   for (const product of products ){
  //     if (product[propName]){
  //       propNames.push(product[propName]);
  //     }
   
  //   }    
  // console.log(propNames);
  //   // Change code above this line
  // ========================= Верное решение Вова Мельник - 20задача обьекты модуль3=================
    //  const stones = [
    //     { name: "Изумруд", cost: 1300, quantity: 4 },
    //     { name: "Бриллиант", cost: 2700, quantity: 3 },
    //     { name: "Сапфир", cost: 400, quantity: 7 },
    //     { name: "Щебень", cost: 200, quantity: 2 },
    //   ];
      
     
      
    //   function calcTotalPrice(stoneName, stones) {
    //     let result;
    //     for (let stone of stones) {
    //       if (stone.name === stoneName) {
    //         result = stone.price * stone.quantity;
    //       }
    //     }
    //     return result;
    //   }
      
    //   console.log(calcTotalPrice("Кварц", stones)); // 400
    //  ================================ Задание 21модуль3 ================
    // const highTemperatures = {
    //   yesterday: 28,
    //   today: 26,
    //   tomorrow: 33,
    // };
    // // Деструктуризация объектов 
    // // const yesterday = highTemperatures.yesterday;
    // // const today = highTemperatures.today;
    // // const tomorrow = highTemperatures.tomorrow;
    // // По условии задачи - удаляем и проводим упрощение записи ,следующая строчка
    // const {yesterday,today,tomorrow} = highTemperatures;      
    
    // const meanTemperature = (yesterday + today + tomorrow) / 3;
    // console.log(meanTemperature);
//  ================================ Задание 22 модуль3 ================
    // const highTemperatures = {
    //   yesterday: 28,
    //   today: 26,
    //   tomorrow: 33,
    // };
    // //  Деструктуризация объектов ++++++++++++++++++
    // // По условии задачи - удаляем и проводим упрощение записи ,следующая строчка
    // const {yesterday,today,tomorrow,icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
    // // const yesterday = highTemperatures.yesterday;
    // // const today = highTemperatures.today;
    // // const tomorrow = highTemperatures.tomorrow;
    // // const icon = highTemperatures.icon;
    
    // // Change code above this line
    // const meanTemperature = (yesterday + today + tomorrow) / 3;
    // console.log(meanTemperature);
  //  ================================ Задание 24 модуль3 ================  
  // const colors = [
  //   { hex: "#f44336", rgb: "244,67,54" },
  //   { hex: "#2196f3", rgb: "33,150,243" },
  //   { hex: "#4caf50", rgb: "76,175,80" },
  //   { hex: "#ffeb3b", rgb: "255,235,59" },
  // ];
  
  // const hexColors = [];
  // const rgbColors = [];
  // // Change code below this line
  
  // for (const { hex, rgb } of colors) {
    
  //   hexColors.push(hex);
  //   rgbColors.push(rgb);
  // }
  //  ================================ Задание 25 модуль3 ================  
  // Глубокая деструктуризация ++++++++++++++++++
  // const forecast = {
  //   today: {
  //     low: 28,
  //     high: 32,
  //     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  //   },
  //   tomorrow: {
  //     low: 27,
  //     high: 31,
  //   },
  // };
  // // проведена глубокая деструктуризация и проведена замена переменных - пример:low:lowToday и т.д
 

  // // const highToday = forecast.today.high;
  // // const lowToday = forecast.today.low;
  // // const todayIcon = forecast.today.icon;
  
  // // const highTomorrow = forecast.tomorrow.high;
  // // const lowTomorrow = forecast.tomorrow.low;
  // // const tomorrowIcon = forecast.tomorrow.icon;
  // const {
  //   today:{low:lowToday,high: highToday,icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  //   tomorrow: {low:lowTomorrow,high:highTomorrow,icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  // } = forecast;
//  ================================ Задание 26 модуль3 ================  
// Паттерн «Объект настроек»+++++++++++++++++

// // Change code below this line
// function calculateMeanTemperature(forecast) {
// //  Проведена замена упрощение записи 
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   // перезаписаны todayLow и todayHigh на -today:{low:todayLow,high:todayHigh}
//   // tomorrowLow и tomorrowHigh на tomorrow:{low:tomorrowLow,high:tomorrowHigh}
//   const {today:{low:todayLow,high:todayHigh}, 
//          tomorrow:{low:tomorrowLow,high:tomorrowHigh}} = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
// ================================ Задание 27 модуль3 ================  
// Пример -конспект
// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
// Задание 27 ----------РЕШЕНИЕ-----------
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);
// ================================ Задание 28 модуль3 ================  
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // в allScores соединяем все масивы
// const allScores = [...firstGroupScores, ...secondGroupScores,...thirdGroupScores];
// // делаем большое и меньшее значение с нового распыленного масива ...allScores
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
// ================================ Задание 29 модуль3 ================  
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);
// ================================ Задание 30 модуль3 ================  
// const data = {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
   
//   // Change code below this line
  
//   // Change code above this line
//   console.log(c);
//  непонятно решение!!!!!
// ================================ Задание 31 модуль3 ================  
// function add(...args) {
//   let total = 0;
//   for ( const key of args){
//   total += key;
//   } return total;
//   // Change code above this line
// }
// ================================ Задание 32 модуль3 ================  
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// в фунцкию добавлено значение number;
//  если arg больше чем это число, то выполняется сумирование всех чилел,которое больше number
// function addOverNum(number,...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (number < arg){
//     total += arg;}
//   }
//   return total;
//   // Change code above this line
// }
// ================================ Задание 33 модуль3 ================ 
// function findMatches(array,...args) {
//   const matches = []; // Don't change this line
// for(let arg of args){
//   for (let number of array){
//     if (arg ===number){
//       matches.push(arg);}
//   }
// } return matches;
  
// }
// variant2
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// ================================ Задание 34 модуль3 ================ 
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// ================================ Задание 35 модуль3 ================
//  ПРИМЕР
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
    
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName); //indexOf - найти такое название и
//     this.books.splice(bookIndex, 1);                 //-splice- удалить его  
                  
//   },
// };

// bookShelf.addBook("Страж снов");
// bookShelf.addBook("End");
// console.log(bookShelf.books);
// bookShelf.removeBook("Последнее королевство");
// console.log(bookShelf.books);
// ================================ Задание 35 модуль3 ================
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex,1, newName); //splice(position, 0, new_element_1) добавление
//     //splice(bookIndex,1, newName) - bookIndex вместо найденого названия -удалить его (1) и поставить новое имя
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);
// ================================ Задание 36 -40 модуль3 ================
// Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// const atTheOldToad = {
//   potions:[],
// }
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions(){
//    this.potions;
//   }
// }
// console.log(atTheOldToad.potions);
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     //добавление элемента в масив используем push
//   this.potions.push(potionName);
//   },
// };
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // находим indexOf и удаляем splice значение 
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex,1);    
//   },
// };
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {    
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex,1,newName ); 
//   },
// };
