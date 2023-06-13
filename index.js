(function() {
  console.log("AAAAAAAAAAAAAAAAAAAA");
}());

function sayHi() {
  console.log("Hi!");
}

sayHi();

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return 0;
  const product = a * b;
  return product;
}

const product = multiply("Hello", 5);

console.log(typeof product, product);

const arr = [0, -1, 2, 13, 4, 50, 6, 70, 18, 9, 42, -11, -212];

const isOver15 = element => typeof element === 'number' && element > 15;

const arrOver15 = arr.filter(isOver15);

console.log(arrOver15);