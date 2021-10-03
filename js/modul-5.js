// Прототипное наследование
// ----------------- module 5 work 5--------------//
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(ancestor);
//   console.log(parent);
//   console.log(child);
//   console.log(child.heritage);


//   console.log(parent.isPrototypeOf(ancestor));
//   console.log(ancestor.isPrototypeOf(parent));
// ----------------- module 5 work 6-7--------------//
// class Car {
//     // Change code below this line
//    constructor (brand, model,price){
//      this.brand = brand;
//      this.model = model;
//      this.price = price;
//    }
//     // Change code above this line
//   }
//   const newCar = new Car("Audi", "Q3", 36000);
//   const newCar2 = new Car("BMW", "X5", 58900);
// console.log(newCar);
// console.log(newCar2);
// ----------------- module 5 work 9--------------//

// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
    
//   getPrice(){
//   return this.price ;
//   }
  
//   changePrice(newPrice){
//   this.price = newPrice;
//   }
    
// }
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) 
// console.log(car.getPrice())
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// ----------------- module 5 work 17--------------//
// class Car {
//   static #MAX_PRICE = 50000;
 
//   static  checkPrice(price){
//   if(price > Car.#MAX_PRICE){
//   return "Error! Price exceeds the maximum";
//   } 
//   return "Success! Price is within acceptable limits"
//   }
  
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));
// ----------------- module 5 work 18--------------//
