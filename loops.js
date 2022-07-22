// Print odds 1-20
for(var i = 0; i <= 20; i++){
    if(i % 2 !==0) {
        console.log(i);
    }0
}

// // Decreasing Multiples of 3
let count = 100
while (count > 0) {
    console.log(count);
    count -=3;
}

// Print The Sequence
let num = 4
while (num > -4) {
    console.log(num);
    num -=1.5;
}

// Sigma 
function sumSum() {
var sum = 0;
for(var i = 0; i <= 100; i++) {
    sum += i;
}
return sum;
}
console.log(sumSum())

// Factorial
// decided to use an array because im not sure how to use factorialize
var array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
x = 1
for(i = 0; i < array.length; i += 1) {
  x *= array[i];
}
console.log(x)