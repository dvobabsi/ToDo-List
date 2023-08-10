function printMe() {
  console.log('I get called from print.js!');
}

const mult = (a, b) => a * b;
const sum = async (a, b) => a + b;

export { mult, sum, printMe};
