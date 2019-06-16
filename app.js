//Objects

const newUser = {
  userName: "Gul",
  age: 26, 
  friends: [], //Array
  hasAccess: false,
  pet: [
    {
      type: 'cat',
      age: 2
    },
    {
      type: 'dog',
      age: 3
    }
  ], // Array of objects
  sayhello: function() {
      console.log('hello');
  } // function
};


const petProperty = "pet";

console.log(newUser);

//To access an objects's property

//newUser.sayHello(); // Dot notation

console.log(newUser[petProperty]); // Bracket notation

newUser.hasAccess = true;

console.log(newUser.hasAccess); // true