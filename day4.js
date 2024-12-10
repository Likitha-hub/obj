// 1.Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

var person={
   firstname: "Mathhew",
    lastname: "Perry",
    age: 30
}

person.city="newyork"
console.log(person)

// 2.Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
 var product={
    Name:"chair",
    Price:"2000",
    Instock:"50"

 }
product.Price="1500"
console.log(product)
delete product.Instock;
console.log(product)

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

var library={
   Fantasy:[["The lord of the rings"],["Harry potter"],["Forest"],["Eye of the wolf"]],
   Mystery:[["Rebbecaa"],["Gone Girl"],["Gaudy night"],["The moonstone"]],

}
library.scientification=[["Inheritance"],["Infinite Powers"],["The Dreamt Land,"],["Invisible Women"]]
console.log(library)
console.log(library.Fantasy[0])
delete library.Mystery
console.log(library)

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var object={
   Username:"likitharedddy",
   email:"likithagummadi@gmail.com",

}
var address={
   city:"old bowenpally",
   state:"Telangana",
   zip:"50011",
}
Object.freeze(object);
object.email="gummadilikitha";
console.log(Object.isFrozen(object))
object.phone="987456123";
console.log(object)

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

var KIA={
   Made:"Southkorea",
   Model:"Kia Seltos",
   Price:"10.90 Lakh",

}
Object.seal(KIA);
delete KIA.Made;
console.log(Object.isSealed(KIA))
KIA.Price="11.90lakh";
console.log(KIA)
console.log(Object.isExtensible(KIA))

// Question 6:

const store = {
  name: "SuperMart",
  products: {
    electronics: {
      phones: {
        apple: {
          iPhoneX: { price: 999, stock: 20 },
          iPhone12: { price: 1099, stock: 15 },
        },
        samsung: {
          galaxyS21: { price: 799, stock: 25 },
          galaxyNote20: { price: 999, stock: 10 },
        },
      },
      laptops: {
        dell: {
          XPS13: { price: 1200, stock: 10 },
          Inspiron15: { price: 800, stock: 30 },
        },
        hp: {
          SpectreX360: { price: 1300, stock: 5 },
          Pavilion15: { price: 750, stock: 20 },
        },
      },
    },
    groceries: {
      fruits: {
        apples: { price: 2, stock: 100 },
        bananas: { price: 1, stock: 150 },
      },
      vegetables: {
        carrots: { price: 1.5, stock: 200 },
        spinach: { price: 1, stock: 100 },
      },
    },
  },
};
// console.log(store.products.laptops.hp.Pavilion15.price);
// Console.log the spinach stock and console .log the hp Pavilion15 price


console.log(store.products.groceries.vegetables.spinach.stock);
console.log(store.products.electronics.laptops.hp.Pavilion15.price);
