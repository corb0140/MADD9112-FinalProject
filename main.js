let number = [1, 4, 7, 6, 10, 5, 4];
let sum = 0;
let average;

for (i = 0; i < number.length; i++) {
  sum += number[i];
  average = sum / number.length;
}

console.log(sum);
console.log(average);
