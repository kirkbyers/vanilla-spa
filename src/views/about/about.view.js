class About {
    constructor () {
        this.selector = '#content';
        this.template = require('./about.template.html');
    }

    render () {
        document.querySelector(this.selector).innerHTML = this.template;
    }
}

export {About}
