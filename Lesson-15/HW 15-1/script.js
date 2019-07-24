var button = document.getElementById('button');
var table = document.getElementById('table');

button.onclick = function () {
    table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>')
};

table.addEventListener('click', createInput, false);

function createInput(event) {
    var target = event.target;

    while (target !== table) {
        if (target.tagName === 'TD' && target.children.length === 0) {
            var text1 = target.innerHTML;
            target.innerHTML = '<input type="text">';
            var input = document.getElementsByTagName('input')[0];
            input.value = text1;
            input.focus();
            input.onblur = removeInput;
            return;
        }
        target = target.parentNode;
    }
}

function removeInput() {
    var input = document.getElementsByTagName('input')[0];
    var text2 = input.value;

    input.parentNode.innerHTML = text2;
}