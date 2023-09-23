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






