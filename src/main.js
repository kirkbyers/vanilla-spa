import { Router } from './router/index';
import {
    About,
    Home,
    Login
} from './views';

const homeView = new Home;
const aboutView = new About;
const loginView = new Login;

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
    },
    {
        name: 'login',
        regexRoute: /login/,
        handler () {
            console.log('login');
            loginView.render();
        }
    }
];

appRouter.addRoutes(routes);
appRouter.listen();
