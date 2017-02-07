class Post {
  constructor () {
    this.selector = "#content";
    // Sets the default of 404 if template not found
    this.template = require('../404/404.template.html');
  }

  render (templateSlug) {
    this.selectTemplate(templateSlug);
    document.querySelector(this.selector).innerHTML = this.template;
  }

  selectTemplate (templateSlug = '') {
    try {
      const templateCheck = require(`../../posts/${templateSlug}.html`);
      console.log(templateCheck);
    } catch (err) {
      console.error(`Post "${templateSlug}" not found or no longer exsists`);
    }
  }
}

export { Post };