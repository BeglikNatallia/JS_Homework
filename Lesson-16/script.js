var button = document.getElementsByTagName('button')[0];
var user = document.getElementsByClassName('user')[0];
var userInfo = document.getElementsByClassName('user-info')[0];

button.onclick = function () {
    if (localStorage.Users) {
        drawUsersTabs(JSON.parse(localStorage.Users));
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=23', true);
        xhr.onload = function () {
            try {
                var usersData = JSON.parse(this.response).data;
                if (usersData.length) {
                    localStorage.setItem('Users', JSON.stringify(usersData));
                    drawUsersTabs(usersData);
                } else {
                    error();
                }
            } catch (ex) {
                error();
            }
        };
        xhr.send();
    }
};

function drawUsersTabs(arr) {
    user.innerHTML = '';
    userInfo.innerHTML = '';
    for (var i = 0; i < arr.length; i++) {
        var newTab = document.createElement('div');
        newTab.innerHTML = 'User ' + (i + 1);
        newTab.classList.add('newTab');
        newTab.classList.add('active');
        user.appendChild(newTab);
    }
    hideTabs(1);
    createTabContent(0);

    return user;
}

function createTabContent(n) {
    userInfo.innerHTML = '';
    var image = document.createElement('img');
    image.src = JSON.parse(localStorage.Users)[n]['avatar'];
    userInfo.appendChild(image);
    var p1 = document.createElement('p');
    p1.innerHTML = 'Fist Name: ' + JSON.parse(localStorage.Users)[n]['first_name'];
    var p2 = document.createElement('p');
    p2.innerHTML = 'Last Name: ' + JSON.parse(localStorage.Users)[n]['last_name'];
    userInfo.appendChild(p1);
    userInfo.appendChild(p2);
    userInfo.classList.add('tabContentSize');
}

var allTabs = document.getElementsByClassName('newTab');

function hideTabs(a) {
    for (var j = a; j < allTabs.length; j++) {
        allTabs[j].classList.remove('active');
        allTabs[j].classList.add('hide');
    }
}

user.onclick = function (event) {
    var target = event.target;
    while (target !== this) {
        for (var n = 0; n < allTabs.length; n++) {
            if (target === allTabs[n]) {
                showTabsContent(n);
                break;
            }
        }
        target = target.parentNode;
    }
};

function showTabsContent(b) {
    if (allTabs[b].classList.contains('hide')) {
        hideTabs(0);
        allTabs[b].classList.remove('hide');
        allTabs[b].classList.add('active');

        createTabContent(b);
    }
}

function error() {
    user.innerHTML = '';
    var error = document.createElement('p');
    error.innerHTML = 'An error occured while loading data';
    error.classList.add('error');
    user.appendChild(error);
    return user;
}