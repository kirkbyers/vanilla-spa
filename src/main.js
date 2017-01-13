import { Router } from './router/index';

console.log('hello world');

console.log(Router);

const router1 = new Router({one: 1});
const router2 = new Router({two: 2});

console.log(router1, router2);