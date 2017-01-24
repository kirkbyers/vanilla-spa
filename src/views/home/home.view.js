import {db} from '../../firebase';

class Home {
    constructor () {
        this.selector = '#content';
        this.template = require('./home.template.html');
    }

    render () {
        db.ref('posts').on("value", (snap) => {
            console.log(snap.val());
        }, (err) => {
            console.error(err);
        });
        document.querySelector(this.selector).innerHTML = this.template;
    }
}

export {Home}
