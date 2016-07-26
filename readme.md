#Angular2 Webpack Polyfill
A simple starter example showing Angular 2 bundled using webpack with the [polyfill.io](http://polyfill.io)
service and core.js for cross browser compatibility. Core.js can be loaded from a CDN or added to the
vendor bundle depending on your preference.

When this project was originally created, correctly loading the polyfills for all the browsers
promised to be supported by Angular 2 was often confusing and used different libraries that had
performance issues. There were also lots of unecessary dependencies added to a project which was
clutter and this was an attempt to simplify everything.

You can see a [live example](http://captain-codeman.appspot.com/) of the app - explore the
network tab to see the polyfill requests and vendor / app bundle sizes. The RC4 version of these
are currently 722Kb + 3Kb or 165Kb + 1.3Kb when gzipped. Polyfills are another ~27.8Kb (if using
Chrome).

## Webpack Build
Although there were already some webpack projects when this was created, I found many of them to be
too big and too complex for learning. The Webpack configuration in this project is meant to be
the bare bones showing how to have some shared configuration, a devlopement build and a production
build with hashed filenames for long-term cacheability plus minification. It's been used as the
basis for more comprehensive applications (including sass, bootstrap, 3rd party JS libs etc...).

The initial quickstart and CLI tools for Angular 2 seemed to favor builds based on System.js
and unfortunately this seemed to cause issues for lots of new users (confusion around configuration
and performance with hundreds of requests and multi Mb downloads if bundling wasn't used). They
now appear to be also moving to Webpack as the preferred solution.

## Polyfill service
The polyfill downloaded is based on the browser user agent. The lack of Intl support in Safari
is the reason for it being the largest (currently used in things such as number pipe formatting).
Using the separate polyfill service prevents other browser users from having to pay the download
price for Safari and IE support. If polyfills were added directly to the bundle then users with
browsers that have native support (such as Chrome) would be forced to download and evaluate code
that is not required.

Fundamentally, polyfills should not be added to your application code or bundle - they are meant
to be a temporary solution to bring a browser up to spec until it has native support. Using the
[polyfill.io](http://polyfill.io) service seems to be the best solution to doing this.

## Setup
Install dependencies:

    npm install

Run dev server (run http://localhost:5000)

    npm start

Build deployment (created in build folder)

    npm run build
