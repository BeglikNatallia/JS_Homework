//Задание 1

var arr = [-1, 0, 2, 34, -2];

var newArr = arr.filter(function (el) {
    return el > 0;
});
console.log(newArr);

//Задание 2

var arr1 = [-1, 0, 2, 34, -2];

var findFistPositiveNumber = arr1.find(function(el) {
    return el > 0;
});

console.log(findFistPositiveNumber);

//Задание 3

function isPalindrome(word) {
    var arr = word.split('');
    var wordReverse = arr.reverse().join('');

    if (word.toLowerCase() === wordReverse.toLowerCase()) {
        console.log('true');
    } else {
        console.log('false');
    }

}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false

//Задание 4

function areAnagrams(word1, word2) {
    var arg1 = word1.split('').sort().join('').toLowerCase();
    var arg2 = word2.split('').sort().join('').toLowerCase();

    if (arg1 === arg2) {
        console.log('true');
    } else {
        console.log('false');
    }

}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false

//Задание 5

function divideArr(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size))
    }

      return newArr;
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);


