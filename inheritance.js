//1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.
const parent={
    name:"Aisha",
    age: "20"
    
}
const child={
     class:"12th",
     address: "jalna"

    
}

child.__proto__= parent;
console.log(child.name);
console.log(child.__proto__);

//2. Write code to explain prototype chaining
function Student(name,age){
    this.name = name;
    this.age = age; 
}
let student = new Student('Ditya', 18)
console.log(student)

//3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.
let arr1 = new Array(1, 13, 2, 28);
arr1.__proto__.sum = function(givenArray){
    let sum = 0;
    for(let i of givenArray){
        sum += i;
    }
    return sum;
}
let x = arr1.sum(arr1);
console.log(x);

let arr2 = new Array(9, 50, 90, 2);
let y = arr2.sum(arr2);
console.log(y);

//4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let obj={
    name: "Diya",
    address: "Jalna",
    age: "15",
    school: "MSS",
    class: "10th"

    
}
let result=Object.keys(obj)
console.log(result)