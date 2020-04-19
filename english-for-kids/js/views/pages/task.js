import Component from '../component.js';

class Task extends Component {
    constructor() {
        super();
        this.task = this.getCategoryFromLS();
    }

    render() {
        return new Promise(resolve => {
            resolve(`     
                ${this.task.map((el) => this.getTaskHTML(el)).join('\n ')} 
            `);
        });
    }

    getCategoryFromLS() {
        return JSON.parse(localStorage.getItem('category'));
    }

    getTaskHTML(el) {
        return `
                <div class="card">
                    <div class="front" style="background-image: url('data/${el['image']}')">
                        <div class="card-header">${el['word']}</div>
                    </div>
                </div>
        `;
    }
}

export default Task;