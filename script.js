// Variables & Data Types

let name = "Nirmal";
console.log(typeof name);


let age = 28;
console.log(age);
console.log(typeof age);


let isWorking = true;
console.log(isWorking);
console.log(typeof isWorking);


let qualification;
console.log(qualification);
console.log(typeof qualification);


let salary = null;
console.log(salary);
console.log(typeof salary);


let myName = "Nirmal";
let myAge = 28;       
let working = true;   
let city;             
let experience = null;
console.log(myName);
console.log(myAge);
console.log(working);
console.log(city);
console.log(experience);


let myQualification = "M.Sc Mathematics";
console.log(typeof myQualification);


let mySalary = 425000;
console.log(typeof mySalary);
console.log(typeof mySalary === "number");


let stringNumber = "100";
let actualNumber = 100;
console.log(typeof stringNumber);  // string
console.log(typeof actualNumber);  // number


let userName = "Nirmal";
let userAge = 28;
let userQualification = "M.Sc Mathematics";
let userWorkingStatus = true;
console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(userQualification, typeof userQualification);
console.log(userWorkingStatus, typeof userWorkingStatus);



// Arrays

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);


let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);


let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);


let mobiles = ["Vivo", "Samsung", "Apple", "OnePlus", "Realme"];
console.log(mobiles[mobiles.length - 1]);


let numbers2 = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers2[numbers2.length - 2]);


let foods = ["Pizza", "Biryani", "Burger", "Dosa", "Fried Rice"];
console.log(foods[0]);                  
console.log(foods[2]);                  
console.log(foods[foods.length - 1]);   


let cricketers = ["Dhoni", "Virat", "Rohit", "Sachin", "Dravid"];
console.log(cricketers[3]);


let toys = ["Car", "Ball", "Doll", "Teddy Bear", "Robot"];
console.log(toys[toys.length - 1]);


let values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(values[0]);                    
console.log(values[values.length - 1]);    
console.log(values[values.length - 2]);    


let mixedArray = ["Apple", "Banana", "Car", "Teddy Bear", "Virat Kohli"];
console.log(mixedArray);
console.log(mixedArray[0]);  
console.log(mixedArray[2]);  
console.log(mixedArray[4]);  



// Objects

let person = {
    name: "Nirmal",
    age: 28,
    city: "Coimbatore"
};
console.log(person);


let employee = {
    name: "Nirmal",
    qualification: "M.Sc Mathematics",
    company: "Stackly"
};
console.log(employee.company);


let fruitObject = {
    fruits: ["Apple", "Banana", "Mango", "Orange"]
};
console.log(fruitObject.fruits[1]);


let toyObject = {
    toys: ["Car", "Ball", "Robot", "Teddy Bear"]
};
console.log(toyObject.toys[toyObject.toys.length - 1]);


let cricket = {
    cricketer: "Virat Kohli",
    team: "India"
};
console.log(cricket.cricketer);


let details = {
    fruitName: "Mango",
    toyName: "Robot",
    cricketer: "MS Dhoni"
};
console.log(details.fruitName);
console.log(details.toyName);
console.log(details.cricketer);


let college = {
    students: ["Arun", "Bala", "Kumar", "Ravi"],
    courses: ["JavaScript", "Python", "React", "SQL"]
};
console.log(college.students[0]);  
console.log(college.courses[1]);   


let mobileObject = {
    mobile: ["Vivo", "Samsung", "iPhone", "OnePlus"]
};
console.log(mobileObject.mobile[2]);


let employeeDetails = {
    employeeName: "Nirmal",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    experience: 3
};
console.log(employeeDetails.skills[1]);


let personalInfo = {
    name: "Nirmal",
    age: 28,
    qualification: "M.Sc Mathematics",
    city: "Coimbatore",
    company: "Stackly"
};
console.log(personalInfo.name);
console.log(personalInfo.qualification);
console.log(personalInfo.company);



// Arithmetic Operators

// let a = 20;
// let b = 10;
// console.log(a + b);
// console.log(a - b); 
// console.log(a * b); 
// console.log(a / b); 


// let a = 25;
// let b = 4;
// console.log(a % b);


// let result = 2 ** 5;
// console.log(result);


// let a = 10;
// let b = 5;
// console.log(a + b);  
// console.log(a - b);  
// console.log(a * b);  
// console.log(a / b);  
// console.log(a % b);  
// console.log(a ** b); 


// let a = 10;
// let b = 5;
// console.log(a + b); 
// console.log(a - b); 
// console.log(a * b); 
// console.log(a / b); 
// console.log(a % b); 
// console.log(a ** b); 




// Increment & Decrement

// let number = 10;
// console.log(++number);


// let number = 10;
// console.log(number++);
// console.log(number);


// let number = 10;
// console.log(number++);
// console.log(number);


// let number = 20;
// console.log(number--);
// console.log(number);


// let a = 10;
// let b = 10;
// console.log(++a); 
// console.log(b++); 
// console.log(a);
// console.log(b);



// Assignment Operators

// let a = 20;
// let b = 10;
// a += b;
// console.log(a);


// let a = 20;
// let b = 10;
// a += b;
// console.log(a);


// let a = 50;
// let b = 20;
// a -= b;
// console.log(a);


// let a = 100;
// let b = 10;
// a /= b;
// console.log(a);


// let a = 100;
// let b = 10;
// a /= b;
// console.log(a);



// Comparison, Logical & Ternary Operators

// let a = 20;
// let b = 10;
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);


// let a = 10;
// let b = "10";
// console.log(a == b);
// console.log(a === b);


// let a = 10;
// let b = 20;
// console.log(a < b && b > 15);
// console.log(a > b || b > 15);
// console.log(!(a > b));


// let age = 20;
// let result = age >= 18 ? "Eligible" : "Not Eligible";
// console.log(result);


// let age = 20;
// let result = age >= 18 ? "Eligible" : "Not Eligible";
// console.log(result);