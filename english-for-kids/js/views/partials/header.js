import Component from '../../views/component.js';

class Header extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
    <div class="menuToggle">
        <input type="checkbox" id="menu-input">
        <span></span>
        <span></span>
        <span></span>
    </div>
            <div class="header_navigation">
          <ul class="navigation" id="menu">
            <li><a href="#/" class="menu-link active">Main Page</a></li>
            <li><a href="#/cards" class="menu-link" id="01">Action (set A)</a></li>
            <li><a href="#/cards" class="menu-link" id="02">Action (set B)</a></li>
            <li><a href="#/cards" class="menu-link" id="03">Animal (set A)</a></li>
            <li><a href="#/cards" class="menu-link" id="04">Animal (set B)</a></li>
            <li><a href="#/cards" class="menu-link" id="05">Clothes</a></li>
            <li><a href="#/cards" class="menu-link" id="06">Emotions</a></li>
            <li><a href="#/cards" class="menu-link" id="07">Fruit</a></li>
            <li><a href="#/cards" class="menu-link" id="08">Vegetables</a></li>
          </ul>
        </div>

<div>
    <label class="switch">
        <input type="checkbox" class="switch-input" checked>
        <span class="switch-label" data-on="Play" data-off="Train"></span>
        <span class="switch-handle"></span>
    </label>
</div>
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const hamburger = document.getElementsByClassName('menuToggle')[0],
            navigation = document.getElementById('menu'),
            switchPlayTrain = document.getElementsByClassName('switch-input')[0];

        hamburger.addEventListener('click', () => this.openCloseMenu());
        navigation.addEventListener("click", (event) => this.chooseCategoryHamburgerMenu(event));
        switchPlayTrain.addEventListener('click', () => this.switchPlayTrain());
    }

    openCloseMenu() {
        const header_navigation = document.getElementsByClassName('header_navigation')[0];
        header_navigation.classList.toggle('hamburger_menu_open');
    }

    chooseCategoryHamburgerMenu(event) {
        const navigation = document.getElementById('menu');
        const input = document.getElementById('menu-input');

        if (event.target.tagName !== 'A') {
            return this.openCloseMenu();
        }

        navigation.querySelectorAll('a').forEach(el => el.classList.remove('active'));

        event.target.classList.add('active');
        this.setCategoryFromMenuToLS(event.target.id);
        this.openCloseMenu();
        input.setAttribute('checked', 'false');

    }

    switchPlayTrain() {
        const switchPlayTrain = document.getElementsByClassName('switch-label')[0],
            menu = document.getElementsByClassName('header_navigation')[0],
            card = document.querySelectorAll('.main-card');
        switchPlayTrain.classList.toggle('orange');
        menu.classList.toggle('orange');
        card.forEach(el => el.classList.toggle('green'));

    }

    setCategoryFromMenuToLS(id) {
        localStorage.setItem('category', JSON.stringify(this.cards[+id[1]]));
    }
}

export default Header;