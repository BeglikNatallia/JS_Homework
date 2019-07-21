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

var secondParLinks = secondPar.getElementsByTagName('a');

for (var j = 0; j < secondParLinks.length; j++) {
    secondParLinks[j].addEventListener('click', function (event) {
        event.preventDefault();
        alert(event.target.href);
    }, false);
}