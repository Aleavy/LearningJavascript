const arr = [];

for (let i = 0; i < 10; i++){
    let randNum = Math.floor(Math.random()* 10);
    arr.push(randNum);
}

let min = null;
let max = null;

arr.forEach((num) => {
    if (max === null){
        max = num;
    } else {
        if (max < num){
            max = num;
        }
    }
    if (min === null){
        min = num;
    } else {
        if (min > num){
            min = num;
        }
    }
})

console.log(`The array is: ${arr}\nThe min is: ${min}, The max is: ${max}`)