/* function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Invalid Number'
    } 
    else {
        const cubed = Math.pow(number, 3);
        return cubed;
    }
}

const result = cubeNumber('hello');
console.log(result) */









/* function matchFinder (str1, str2) {
    if(typeof str1 === 'string' && typeof str2 === 'string') {
        if(str1.includes(str2)){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please Enter a valid Input';
    }
}

const result = matchFinder(45, true);
console.log(result); */





/* const arr = [-4, 9];

function sortMaker (arr) {
    for (let i = 0; i<arr.length; i++) {
        const num = arr[i];
        if(num < 0) {
            return 'please inter a positive number';
        }
        else {
            if (arr[0] === arr[1]) {
                return 'equal'
            }
            else if(num >= 0) {
                const srt = arr.sort()
                const reverse = arr.reverse();
                return reverse;
            }
        }
        
    }
}   

const result = sortMaker(arr);
console.log(result); */




/* const obj = {
    street: '10',
    house: '15A',
    society: 'Earth Perfect'
}

function findAddress (object) {
   for (const keys in object) {
    const values = object[keys]
    // console.log(values)
    // return values;
}
}

const result = findAddress(obj);
// console.log(result) */







/* const numbers = [1, 2, 5];

function canPay (numbers, totalDue) {
    let total = 0;
    for (let i=0; i<numbers.length; i++){
        const number = numbers[i];
        total = total + number;
    }
    if (total >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}

const result = canPay(numbers, 10);
console.log(result); */





const data = {
    name: 'akkas',
    age: 21,
    address: 'GP'
}


function getAddress (data) {
    const values = Object.values(data);
    let totalvalue = []
    for(let i=0; i<values.length; i++) {
        const singleValue = values[i];
        totalvalue.push(singleValue)
    }
    return totalvalue;
}

const result = getAddress(data);
console.log(result)