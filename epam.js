//*01 String tasks

//1
function concateStrings(value1,value2) {
    return value1 + value2;
}
console.log(concateStrings('aa','bb'))

//2
function getStringLength(value) {
    return value.length;
}
console.log(getStringLength('spoon'))

//3 
const getStringFromTemplate = (firstName,lastName) => 'Hello ' + firstName + ' ' + lastName;
console.log(getStringFromTemplate('Silvester','Stalone'))

//4
const getFirstChar = val => {return val[0]}
console.log(getFirstChar('Eminem'))

//5
const removeWhiteSpace = val2 => val2.trim();
console.log(removeWhiteSpace('  Ariana Grande'))

//6 
const repeatString = (str,count) => {
    for(let n = 0; n<=count; n++) console.log(str)
};
    repeatString('rut',"5");

//7
const removeFirstAcurances = (str1,val1,val2) => str1.slice(val1,val2);
console.log(removeFirstAcurances('I like legends',11,13))

//8
const converToUpperCase = (str2) => str2.toUpperCase();
console.log(converToUpperCase('brad pitt'));

//9
const extractEmails = str3 => str3.split(' ');
console.log(extractEmails('angus.young@gmail.com,brian.johnson@hotmail.com,bon.scott@yahoo.com'))

//*Number tasks

//1
const getRectangleArea = (width,height) => width*=height;
console.log(getRectangleArea(5,10));

//2
const getCircleCircumference = num => 2 * 3.14 * num;
console.log(getCircleCircumference(5));

//3
const getAverage = (num1,num2) => (num1 + num2)/2;
console.log(getAverage(-3,3))

//4
function getDistanceBetweenPoints(x1,y1,x2,y2){
 let y = x2 - x1;
 let x = y2 - y1;

return Math.sqrt(x*x + y*y);
}
console.log(getDistanceBetweenPoints(0,1,0,0))

//5
const lastDigitOfNum = (num3) => lastDigit = num3 % 10;
console.log(lastDigitOfNum(37))

//6
const parseNumFromString = (str1) => Number(str1);
console.log(parseNumFromString('44'));

//7
const  getParallelipidedDiagonal = (a,b,c) => Math.sqrt(a*a + b*b + c*c);
console.log(getParallelipidedDiagonal(3,3,3))

//8 
const roundToPowerOfTen = (number1, pow) => Math.round(number1 / Math.pow(10, pow)) * Math.pow(10, pow);
console.log(roundToPowerOfTen(1238,3));

//9
const isPrime = numb => {
    for(let n=2; n<=numb; n++) {
        if(numb % n === 0) return false
            return ;
    }
}

//* Date tasks

//1
const parseDateFromIso8601 = date => {
    let myDate = new Date(date);
    return myDate.toISOString();
}
console.log(parseDateFromIso8601('Sun, 28 Nov 2021 13:05:40 GMT'))

//2
const parseDateFromRfc2822 = date_2 => {
    let mySecondDate = new Date(date_2);
    return mySecondDate.toDateString();
}
console.log(parseDateFromRfc2822('2021-11-28'))

//3
const isLeapYear = date_3 => {
    let myThirdDate = new Date(date_3);
    if(date_3 % 4 === 0 || date_3 % 400 === 0) console.log(true)
    else console.log(false);
    return myThirdDate;
    
}
console.log(isLeapYear('2024'))

//4
const timeSpantoString = (startDate,endDate) => {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);
    
    var diff = date2.getTime() - date1.getTime();
    
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -=  days * (1000 * 60 * 60 * 24);
    
    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    var mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    
    var seconds = Math.floor(diff / (1000));
    diff -= seconds * (1000);
    console.log(days + " : " + hours + " : " + mins + " : " + seconds)
}
console.log(timeSpantoString("7/Nov/2012 21:30:00","20/Nov/2012 19:15:00"))

//* Arrays tasks

//1
const findElement = (arr,value) => {
    let index = arr.indexOf(value)
    return index}
console.log(findElement([1,2,3,4,5],4));

2
const generateOdds = len => {
 
    var array = [];
    
    for(let i = 1; i<len; i+=2) {
        array.push(i);
    }
    return array;
}
console.log(generateOdds(10));

//3
const doubleArray = arr => {
    var arr2 = [];
    for (let a=1; a<=2; a++) {
        arr2 = arr2.concat(arr);
    }
    return arr2;
}
console.log(doubleArray([1,2,3,4]))

//4
const getArrayOfPositives = (arr_3) => {
    let ar = []
    for (let r of arr_3) {
        if(r != 0 && r>0) {
            ar.push(r)
        }
    }
    return ar;
    }
console.log(getArrayOfPositives([1,2,5,0,4,-1,-2]))

//5
const getArrayOfString = (arr_4) => {
    let ar_1 = [];
    for (let str of arr_4) {
        if(typeof str === 'string') ar_1.push(str);
    }
    return ar_1;
}
console.log(getArrayOfString(['leo',2,5,'simba',3,true]))

//6
const getUpperCasesString = (arr_5) => {
    let fixed = arr_5.join(' ').toUpperCase().split(' ')

return fixed;
}
console.log(getUpperCasesString(['asadbek']))
             
//7
const getStringsLength = (arr_6) => {
    let ar_2 = [];
    for (let str_1 of arr_6) {
        if(typeof str_1 === 'string') ar_2.push(str_1.length);
    }
    return ar_2;
}
console.log(getStringsLength(['a','ab','abc']));

8
const insertItem = (arr_7,item,index) => {
     
}
console.log(insertItem([1,2,3,4,5],2,1))

//9

