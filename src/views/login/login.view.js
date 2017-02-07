// NOTE: This file is no longer used or imported.
import {auth} from '../../firebase';

class Login {
    constructor () {
        this.selector = "#content";
        this.template = require('./login.template.html');
    }

    render () {
        document.querySelector(this.selector).innerHTML = this.template;
        this.eventListeners();
    }

    eventListeners () {
        const form = document.querySelector('form');
        const email = document.querySelector('[name="email"]');
        const password = document.querySelector('[name="password"]');
        form.addEventListener('submit', (event, x, y) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email.value, password.value)
                .then(res => {
                    console.log(res);
                    this.emitNavigateEvent();
                })
                .catch(err => {
                    console.error(err);
                });
        })
    }

    emitNavigateEvent () {
        const event = new CustomEvent('navigate', {'detail': ''});
        document.querySelector('#content').dispatchEvent(event)
    }
}

export { Login };