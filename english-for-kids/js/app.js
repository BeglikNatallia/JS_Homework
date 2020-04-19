import Utils from './helpers/utils.js';

import Header from './views/partials/header.js';

import Error404 from './views/pages/error404.js';

import Categories from './views/pages/categories.js';
import Task from './views/pages/task.js';

const Routes = {
    '/': Categories,
    '/cards': Task
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
        contentContainer = document.getElementsByClassName('content-container')[0],
        header = new Header();

    header.render().then(html => {
        headerContainer.innerHTML = html;
        header.afterRender();
    });

    const request = Utils.parseRequestURL(),
        parsedURL = `/${request.resource || ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();
    });

}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);