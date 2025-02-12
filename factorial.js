const factorial = number => {
    for (let i = number-1; i > 0;  i--){
        number = number * i;
    }
    return number;
}

console.log(factorial(8))


const factorialRecursive = number =>{
    if (number === 0){
        return 1
    }
    let factorial_num = number * factorialRecursive(number - 1);
    return factorial_num;
}

console.log(factorialRecursive(5))