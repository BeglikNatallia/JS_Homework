//import Utils from '../helpers/utils.js';

import Cards from '../models/cards.js';

class Component {
    constructor() {
//       this.request = Utils.parseRequestURL();
        this.cards = new Cards().getCardsFromLS();
    }

    afterRender() {}
}

export default Component;