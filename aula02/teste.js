function sum(value1, value2)
{
    return value1 + value2;
}

function calculator(value1, value2, operator)
{
    let result;
    switch (operator)
    {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 != 0) result = value1 / value2;
            else result = 'Division by zero!'
            break;
        default:
            result = 'Invalid operation!'
    }
    return result;
}

function circleArea(radius)
{
    return Math.PI * (radius**2);
}

function triangleChecker(side1, side2, side3)
{
    let sides = [side1, side2, side3];
    let result;
    // Sort the number in ascending order in order to distinguish the hypotenuse
    sides = sides.sort();
    // Check if there is no side zero or negative
    if (sides[0] <= 0) result = 'none'; 
    // Check if the sum of the legs is less than or equal to the hypotenuse
    else if ((sides[0] + sides[1]) <= sides[2]) result = 'none';
    else if (sides[0] == sides[1] && sides[1] == sides[2]) result = 'equilateral';
    else if (sides[0] == sides[1] || sides[1] == sides[2]) result = 'isosceles';
    else result = 'scalene';

    return result;
}

console.log('\n> Exercise 01: Sum');
console.log('>>> sum(1,2): ' + sum(1,2));
console.log('>>> sum(3,2): ' + sum(1,2));

console.log('\n> Exercise 02: Calculator');
console.log('>>> calculator(1,1,"+"): ' + calculator(1,1,'+'));
console.log('>>> calculator(1,1,"-"): ' + calculator(1,1,'-'));
console.log('>>> calculator(1,1,"*"): ' + calculator(1,1,'*'));
console.log('>>> calculator(1,1,"/"): ' + calculator(1,1,'/'));

console.log('\n> Exercise 03: Circle Area');
console.log('>>> circleArea(10): ' + circleArea(10));
console.log('>>> circleArea(1): ' + circleArea(1));

console.log('\n> Exercise 04: Triangle Verification');
console.log('>>> triangleChecker(2,2,2): ' + triangleChecker(2,2,2));
console.log('>>> triangleChecker(10,10,10): ' + triangleChecker(10,10,10));
console.log('>>> triangleChecker(3,4,4): ' + triangleChecker(3,4,4));
console.log('>>> triangleChecker(4,3,4): ' + triangleChecker(4,3,4));
console.log('>>> triangleChecker(4,4,3): ' + triangleChecker(4,4,3));
console.log('>>> triangleChecker(10,10,2): ' + triangleChecker(10,10,2));
console.log('>>> triangleChecker(3,4,5): ' + triangleChecker(3,4,5));
console.log('>>> triangleChecker(10,11,12): ' + triangleChecker(10,11,12));
console.log('>>> triangleChecker(5,4,2): ' + triangleChecker(5,4,2));
console.log('>>> triangleChecker(0,0,0): ' + triangleChecker(0,0,0));
console.log('>>> triangleChecker(3,4,-5): ' + triangleChecker(3,4,-5));
console.log('>>> triangleChecker(1,1,3): ' + triangleChecker(1,1,3));
console.log('>>> triangleChecker(2,4,2): ' + triangleChecker(2,4,2));