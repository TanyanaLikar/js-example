// ================================ Задание 1 модуль4 ================
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
  
//   const result = makePizza("Your pizza is being prepared, please wait.");
//   const pointer = makePizza;
// ================================ Задание 1 модуль4 ================
// ================================ Задание 2 модуль4 ================

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName,callback) {
   
//     return  callback(pizzaName);;
//   }
  // ================================ Задание 3 модуль4 ================
//   function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//    console.log(`Eating pizza ${pizzaName}.`);
//   });
// registerGuest("Mango", greet);// в скобках параметры
// function registerGuest(name, callback) //в скобках аргумент

//     function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
  // ================================ Задание 4 модуль4 ================

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//     for( const pizza of pizzaPalace.pizzas){
//                 if(pizzaName === pizza){
//                    return  makePizza(pizzaName);}}
//     return onOrderError(pizzaName);
//     }
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(pizzaName) {
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);
  
    // ================================ Задание 5 модуль4 ================
    // function calculateTotalPrice(orderedItems) {
    //     let totalPrice = 0;
    //     // Change code below this line
      
    //     //for (let i = 0; i < orderedItems.length; i += 1) {
    //      // totalPrice += orderedItems[i];
        
    //   orderedItems.forEach(function (orderedItems, index){
    //   totalPrice +=  orderedItems});
      
    //     // Change code above this line
    //     return totalPrice;
    //   }
    // ================================ Задание 6 модуль4 ================