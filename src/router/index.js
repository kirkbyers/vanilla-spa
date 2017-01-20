let count = 0;

const myRoute = {
    name: 'unique string',
    regexRoute: /path\/to\/route/
};

class Router {
    constructor (routes, root) {
        this.routes = routes;
        this.root = root;
    }

    addRoute ({regexRoute, name, handler}) {
        this.routes.push({regexRoute, name, handler});
        return this;
    }

    addRoutes (routes) {
        routes.forEach(route => this.addRoute(route));
    }

    goTo (routeName) {}

    clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    getFragment() {
        let fragment = '';
        fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
        fragment = fragment.replace(/\?(.*)$/, '');
        fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        return this.clearSlashes(fragment);
    }

    check (f) {
        const fragment = f || this.getFragment();
        if (fragment !== '') {
            this.routes.forEach(route => {
                let match = fragment.match(route.regexRoute);
                if(match) {
                    match.shift();
                    route.handler.apply({}, match);
                    return this;
                }  
            });
            return this;
        } else {
            this.routes.filter(route => route.regexRoute === null)[0].handler();
        }
    }

    listen() {
        const self = this;
        self.listenForLinks();
        let current = self.getFragment();
        function fn () {
            if(current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
                self.listenForLinks();
            }
        }
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    }

    navigate (path) {
        path = path ? path : '';
        history.pushState(null, null, this.root + this.clearSlashes(path));
        return this;
    }

    listenForLinks () {
        const anchors = Array.from(document.getElementsByTagName('a'));
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e, x, y) => {
                event.preventDefault();
                if (location.hostname === anchor.hostname) {
                    this.navigate(anchor.pathname);
                } else {
                    location.href = anchor.href;
                }
                return this;
            })
        })
    }
}

module.exports.Router = Router;