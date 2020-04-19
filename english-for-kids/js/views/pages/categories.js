import Component from '../component.js';

class Categories extends Component {
    constructor() {
        super();
        this.categories = this.cards[0];
    }

    render() {
        return new Promise(resolve => {
            resolve(`     
                ${this.categories.map((el, i) => this.getCardsHTML(el, i)).join('\n ')} 
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const contentContainer = document.getElementsByClassName('content-container')[0];
        contentContainer.addEventListener('click', (e) => this.chooseCategory(e));
    }

    chooseCategory(e) {
        if (e.target.tagName !== 'A') {
            return;
        }

        this.setCategoryToLS(e.target.id);
    }

    setCategoryToLS(id) {
        localStorage.setItem('category', JSON.stringify(this.cards[id]));
    }

    getCardsHTML(el, i) {
        return `
                <a class="main-card green" href="#/cards" id="${i + 1}"><img src="data/${this.cards[i + 1][0]['image']}">${el}</a>
        `;
    }
}

export default Categories;