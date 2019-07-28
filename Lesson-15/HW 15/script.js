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

var secondParLink = secondPar.getElementsByTagName('a');

secondPar.onclick = function (event) {
    event.preventDefault();
    var target = event.target;
    while (target !== this) {
        for (var j = 0; j < secondParLink.length; j++) {
            if (target === secondParLink[j]) {
                checkLocalStorage(j);
                break;
            }
        }
        target = target.parentNode;
    }
};

function checkLocalStorage(n) {
    if (!localStorage['Link ' + (n + 3)]) {
        localStorage.setItem('Link ' + (n + 3), JSON.stringify({path: 'https://google.com'}));
        alert('Ссылка сохранена')
    } else {
        alert(JSON.parse(localStorage['Link ' + (n + 3)])['path']);
    }
}

var clearLocalStorage = document.getElementsByTagName('body')[0];

clearLocalStorage.onload = function () {
    localStorage.clear();
};