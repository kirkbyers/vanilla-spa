# static-post-displayer

##Intro

The purpose of this project is to create and share static articles
without client-side dependencies.

This project It is highly opininated. Posts are originally writen in markdown,
and stored in `src/markdown`. They are then converted to html when 
ready for publication. The resulting html is moved to `src/posts`,
and is displayed when navigated to `baseurl.com/{:post-name}`.

This project makes use of es6, but is packaged with Webpack2 to take
care of some cross-compatability and minifcation.

This project uses Yarn.

## Installation

Run:
```
yarn install
```

## Build



## Converting `.md` to `.html`

Run:
```
github-markdown path/to/markdown.md > path/to/output.html
```