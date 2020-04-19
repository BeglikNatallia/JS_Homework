import cards from '../../data/cards.js';

class Cards {
    constructor() {
        this.defaultCards = cards;
    }

    getCardsFromLS() {
        return JSON.parse(localStorage.getItem('cards')) || this.defaultCards && Cards.setCardsToLS(this.defaultCards);
    }

    static setCardsToLS(cards) {
        localStorage.setItem('cards', JSON.stringify(cards));
    }
}

export default Cards;