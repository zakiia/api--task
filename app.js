// task 1
const student = {
  name: "Zakia",
  isDeveloper: true,
  salary: 2500,
  subject: ["english", "math", "chemistry", "physics"],
  sister: {
    name: "Fatema",
    job: "engineer",
  },
  treatDe: function (expense) {
    this.salary = this.salary - expense;
    return this.salary;
  },
};
const remaining = student.treatDe(500);
// console.log(remaining);

// task 2
const myNote = `i'm ${student.name} . my sister name: ${
  student.sister.name
}. my current favourite subject is: ${
  student.subject[1]
} my bank balance is: ${student.treatDe(500)}`;
// console.log(myNote);

// task 3.1
const noParameter = () => {
  return 89;
};
// console.log(noParameter());

// task 3.2
const singleParameter = (number) => {
  if (number % 7 == 0) {
    return true;
  }
};
// console.log(singleParameter(21));

// task 3.3
const dualParameter = (num1, num2) => {
  const add = num1 + num2;
  const multiple = add / 2;
  return multiple;
};
// console.log(dualParameter(4, 6));

//task 3.4
const multiLine = (number1, number2) => {
  const add = number1 + 7;
  const add2 = number2 + 7;
  const total = add + add2;
  return total;
};
// console.log(multiLine(10, 15));

// task 4
const myArrs = [7, 14, 23, 35, 42];
const myArrDivide = myArrs.map((myArr) => myArr / 7);
// console.log(myArrDivide);

// task 5
const myArrFor = myArrs.forEach((myArr) => console.log(myArr));
const bigNumber = myArrs.filter((number) => number > 15);
// console.log(bigNumber);
const findItem = myArrs.find((item) => item == 23);
// console.log(findItem);

// task 6
const fish = {
  name: "Hilsha",
  price: 50,
  colour: "silver",
};
const { name } = fish;
// console.log(name);

const colour = ["red", "yellow", "blue", "green", "black"];
const [second] = colour;
// console.log(second);
