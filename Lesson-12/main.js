//Задание 1

function getArrayOfObjects(v, i, arr) {
    return {name: v};
}
arr = ['Vasya', 'Helen', 'Marina', 'Alex'];
console.log(arr.map(getArrayOfObjects));

//Задание 2

function getCurrentTime(r, v, i, a) {
    return r + ' : ' + v;
}

var arr = ['00', '13', '24'];
console.log('Текущее время ' + arr.reduce(getCurrentTime, ''));


//Задание 3

function getNumberOfVowel(text) {
    var arr = text.toLowerCase().split('');

    var vowel = ['а', 'е', 'ё', 'и', 'о', 'у', 'э', 'ю', 'я', 'ы'];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i]) < 0) {
            continue;
        } else {
            sum += 1;
        }
    }

    return sum;
}

var a = 'Терпение и труд все перетрут!';
console.log(getNumberOfVowel(a));

//Задание 4

function countLettersInSentence(text) {
    var sentence = text.split(/[\!\.\?]/);

    for (var i = 0; i < sentence.length; i++) {
        var count = sentence[i].split('');
        var sum = 0;

        for (var j = 0; j < count.length; j++){
            if (count[j] === ' ' || count[j] === ',') {
                continue;
            } else {
                sum += 1;
            }
        }
        console.log(sentence[i] + ' : ' + sum);
    }
}

countLettersInSentence('Лето или осень? Конечно лето! Теплые вечера, закаты.');











