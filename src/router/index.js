let count = 0;

class Router {
    constructor (routes) {
        this.routes = routes;
        this.count = count;
        count++;
    }
}

module.exports.Router = Router;