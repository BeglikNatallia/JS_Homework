function deepClone(obj) {
    var copy = {};

    for (var key in obj) {

        if (obj[key] === null || (typeof (obj[key]) !== 'object') || (typeof (obj[key]) === 'function')) {
            copy[key] = obj[key];
        }

        if (Array.isArray(obj[key]) === true) {
            var newArr = [];
            for (var i = 0; i < obj[key].length; i++) {
                if (typeof (obj[key][i]) === 'object' && Array.isArray(obj[key][i]) === false && obj[key][i] !== null) {
                    newArr[i] = deepClone(obj[key][i]);
                }
                newArr[i] = obj[key][i];
            }
            copy[key] = newArr;
        }

        if (typeof (obj[key]) === 'object' && Array.isArray(obj[key]) === false && obj[key] !== null) {

            copy[key] = deepClone(obj[key]);
        }

    }

    return copy;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);