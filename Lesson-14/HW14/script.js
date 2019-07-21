var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var inputs = document.getElementsByTagName('input');

input1.onkeyup = checkField;
input2.onkeyup = checkField;

function checkField() {
    document.getElementById('button').disabled = !input1.value || !input2.value ? 'disabled' : false;

}

var buttonCreateChessBoard = document.getElementById('button');

buttonCreateChessBoard.addEventListener('click', checkCells, false);

function checkCells(event) {
    for (var m = 0; m < inputs.length; m++) {
        if (isNaN(inputs[m].value) || inputs[m].value > 10 || inputs[m].value < 1) {
            alert('Введите число от 1 до 10');
            event.stopImmediatePropagation();
        }
    }

}

var tableChess = document.getElementById('tableChess'); //род. контейнер

buttonCreateChessBoard.onclick = function () {
    var removeTable = tableChess.getElementsByTagName('table')[0];
    removeTable.remove();
    var table = document.createElement('table');
    table.classList.add('backgroundTable');
    var value1 = +input1.value;
    var value2 = +input2.value;

    for (var i = 0; i < value2; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < value1; j++) {
            var td = document.createElement('td');
            //добавление в строку ячейки
            if (i % 2 && j % 2 === 0 || i % 2 === 0 && j % 2) {
                td.classList.add('black');
            }
            tr.appendChild(td);
        }
        //добавление в таблицу строки
        table.appendChild(tr);
    }

    return tableChess.appendChild(table);  //добавление таблицы в родительский контейнер

};

tableChess.onclick = function (event) {
    var target = event.target;
    while (target !== this) {
        if (target.tagName === 'TD') {
            changeCellsColor(target);
            return;
        }
        target = target.parentNode;
    }
};

function changeCellsColor() {
    var table = document.getElementsByTagName('table')[0];
    table.classList.toggle('changeBackgroundTable');

    var td = document.getElementsByClassName('black');
    for (var n = 0; n < td.length; n++) {
        td[n].classList.toggle('white');
    }
}