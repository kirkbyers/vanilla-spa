import { Router } from './router/index';
import {
    About,
    Home,
    Post
} from './views';

import './scss/index.scss';

const homeView = new Home;
const aboutView = new About;
const postView = new Post;

const appRouter = new Router([], '/');

const routes = [
    {
        name: 'home',
        regexRoute: null,
        handler () {
            console.log('Home')
            homeView.render();
        }
    },
    {
        name: 'post',
        regexRoute: /^[a-z0-9-]+$/,
        handler () {
            console.log('Post');
            postView.render(appRouter.getFragment());
        }
    }
];

appRouter.addRoutes(routes);
appRouter.listen();
