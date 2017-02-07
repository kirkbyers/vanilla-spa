class Home {
    constructor () {
        this.selector = '#content';
        this.template = require('./home.template.html');
    }

    render () {
        document.querySelector(this.selector).innerHTML = this.template;
    }
}

export {Home}
