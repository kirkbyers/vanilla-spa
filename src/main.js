import { Router } from './router/index';
import {
    About,
    Home
} from './views';

const homeView = new Home;
const aboutView = new About;

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
        name: 'about',
        regexRoute: /about/,
        handler () {
            console.log('about');
            aboutView.render();
        }
    }
];

appRouter.addRoutes(routes);
appRouter.listen();
