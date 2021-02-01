# Tweeter

Tweeter is a simple, single-page Twitter clone. 

A user can make new tweets and view tweets. Upon submission, tweets are validated (tweets must be within 140 characters and not empty, and must be converted to XSS safe text).

This repository is built upon the starter code provided by [LHL](https://github.com/lighthouse-labs/tweeter). Tweeter is built with HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, Express and MongoDB on the back-end.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Final Product

!["Screenshot of tweet compose box"](https://raw.githubusercontent.com/leungcnie/tweeter/master/docs/desktop-tweeter.png)
!["Screenshot of tweets for smaller dimensions"](https://raw.githubusercontent.com/leungcnie/tweeter/master/docs/tweets.png)