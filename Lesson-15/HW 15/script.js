var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByClassName('button')[0];

button.onclick = function () {
    var changeColorWeight = firstPar.getElementsByTagName('a');

    for (var i = 0; i < changeColorWeight.length; i++) {
        changeColorWeight[i].classList.add('changes');
    }
};

var secondParLink3 = secondPar.getElementsByTagName('a')[0];
var secondParLink4 = secondPar.getElementsByTagName('a')[1];

secondParLink3.addEventListener('click', function (event) {
    event.preventDefault();

    if (!localStorage.Link3) {
        localStorage.setItem('Link3', JSON.stringify('{ path: \'https://google.com\' }'));
        alert('Ссылка сохранена')
    } else {
        alert(JSON.parse(localStorage.Link3));
    }

}, false);

secondParLink4.addEventListener('click', function (event) {
    event.preventDefault();

    if (!localStorage.Link4) {
        localStorage.setItem('Link4', JSON.stringify('{ path: \'https://google.com\' }'));
        alert('Ссылка сохранена')
    } else {
        alert(JSON.parse(localStorage.Link4));
    }

}, false);

var clearLocalStorage = document.getElementsByTagName('body')[0];

clearLocalStorage.onload = function () {
    localStorage.clear();
};