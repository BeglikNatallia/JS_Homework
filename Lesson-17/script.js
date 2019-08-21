var btnStart = document.getElementsByClassName('buttons')[0];
var milliseconds = document.getElementsByClassName('time')[2];
var seconds = document.getElementsByClassName('time')[1];
var minutes = document.getElementsByClassName('time')[0];
var body = document.getElementsByTagName('body')[0];
var stopTime = document.getElementsByClassName('stopTime')[0];
var btnReset = document.getElementsByClassName('reset')[0];
var btnSave = document.getElementsByClassName('save')[0];
var timerId;

btnStart.addEventListener('click', startTimer, false);

function startTimer() {
    if (btnStart.getAttribute('data-btn') === 'start') {
        timerId = setInterval(timer, 10);
        btnStart.setAttribute('data-btn', 'stop');
        btnStart.textContent = 'Stop';
        btnReset.classList.add('open');
        btnSave.classList.add('open');
    } else if (btnStart.getAttribute('data-btn') === 'stop') {
        clearInterval(timerId);
        btnStart.setAttribute('data-btn', 'run');
        btnStart.textContent = 'Run';
        return;
    } else if (btnStart.getAttribute('data-btn') === 'run') {
        timerId = setInterval(timer, 10);
        btnStart.setAttribute('data-btn', 'stop');
        btnStart.textContent = 'Stop';
        return;
    }
}

function timer() {
    milliseconds.textContent = +milliseconds.textContent + 1;
    if (+milliseconds.textContent >= 100) {
        milliseconds.textContent = '00';
        seconds.textContent = +seconds.textContent + 1;
        if (+seconds.textContent >= 60) {
            seconds.textContent = '00';
            minutes.textContent = +minutes.textContent + 1;
            if (+minutes.textContent === 60) {
                clearInterval(timerId);
                seconds.textContent = '00';
                milliseconds.textContent = '00';
            } else if (+minutes.textContent < 10) {
                minutes.textContent = '0' + minutes.textContent;
            }
        } else if (+seconds.textContent < 10) {
            seconds.textContent = '0' + seconds.textContent;
        }
    } else if (+milliseconds.textContent < 10) {
        milliseconds.textContent = '0' + milliseconds.textContent;
    }
}

btnSave.onclick = function () {
    var newParagraph = document.createElement('p');
    stopTime.appendChild(newParagraph);
    newParagraph.innerHTML += minutes.textContent + ':' + seconds.textContent + ':' + milliseconds.textContent;
};

btnReset.onclick = function () {
    clearInterval(timerId);
    btnStart.setAttribute('data-btn', 'start');
    btnStart.textContent = 'Start';
    btnReset.classList.remove('open');
    btnSave.classList.remove('open');
    minutes.textContent = '00';
    seconds.textContent = '00';
    milliseconds.textContent = '00';
    stopTime.textContent = '';
};