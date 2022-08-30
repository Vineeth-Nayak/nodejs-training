// Write a JavaScript program to list the properties of a JavaScript object.
let student = {
  name: "Vineeth",
};

console.log(Object.keys(student));

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property
let student1 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student1.rollno;
console.log(student1);

// Write a JavaScript program to get the length of a JavaScript object
let student2 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(Object.keys(student2).length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const showReadingStatus = (obj) => {
  obj.map((e) => console.log(e.author, e.title, e.readingStatus));
};

showReadingStatus(library);

// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes
const volumeOfCylinder = (radius, height) => {
  return Math.PI * (radius * radius) * height;
};

console.log(volumeOfCylinder(7, 2));
