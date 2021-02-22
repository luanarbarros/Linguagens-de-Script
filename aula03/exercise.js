function sum(numbers)
{
    result = numbers.reduce((total, num) => total + num, 0);
    return result;
}

function sumOdds(numbers)
{
    result = numbers.reduce((total, num) => total + (num % 2 == 0 ? 0 : num), 0);
    return result;
}

function product(numbers)
{
    result = numbers.reduce((total, num) => total * num, 1);
    return result;
}

console.log('\n> Operation: Sum');
console.log('>>> sum([1, 2, 3]): ' + sum([1, 2, 3]));
console.log('>>> sum([2, 2, 2]): ' + sum([2, 2, 2]));
console.log('>>> sum([1, 2, 3, 4, 5, 6]): ' + sum([1, 2, 3, 4, 5, 6]));

console.log('\n> Operation: SumOdds');
console.log('>>> sumOdds([1, 2, 3]): ' + sumOdds([1, 2, 3]));
console.log('>>> sumOdds([2, 2, 2]): ' + sumOdds([2, 2, 2]));
console.log('>>> sumOdds([1, 2, 3, 4, 5, 6]): ' + sumOdds([1, 2, 3, 4, 5, 6]));


console.log('\n> Operation: Product');
console.log('>>> product([1, 2, 3]): ' + product([1, 2, 3]));
console.log('>>> product([2, 2, 2]): ' + product([2, 2, 2]));
console.log('>>> product([1, 2, 3, 4, 5, 6]): ' + product([1, 2, 3, 4, 5, 6]));