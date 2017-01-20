import { Router } from './router/index';

const appRouter = new Router([], '/');

const routes = [
    {
        name: 'home',
        regexRoute: null,
        handler () {
            console.log('Home')
        }
    },
    {
        name: 'about',
        regexRoute: /about/,
        handler () {
            console.log('about');
        }
    }
];

appRouter.addRoutes(routes);
appRouter.listen();
appRouter.listenForLinks();
