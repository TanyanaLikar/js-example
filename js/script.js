
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
    const colors = [
        { hex: "#f44336", rgb: "244,67,54" },
        { hex: "#2196f3", rgb: "33,150,243" },
        { hex: "#4caf50", rgb: "76,175,80" },
        { hex: "#ffeb3b", rgb: "255,235,59" },
      ];
      console.log(colors);
      const hexColors = [];
      const rgbColors = [];
      for(const key of colors){
        const key = Object.values(salaries);
        };
        for(const value of colors){
          const values = Object.values(salaries);
        };
    console.log(hexColors);
    console.log(rgbColors);