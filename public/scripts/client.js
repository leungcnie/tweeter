/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // Append each tweet element to #tweets-container
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  }

  // Create tweet <article> element from tweet object
  const createTweetElement = (tweetObj) => {
    const avatar = tweetObj.user.avatars;
    const name = tweetObj.user.name;
    const handle = tweetObj.user.handle;
    const text = tweetObj.content.text;
    let creationDate = "";

    const deltaSeconds = Date.now() - tweetObj.created_at / 1000;
    const days = Math.floor(deltaSeconds / 86400); // 86400 seconds in a day
    if (days < 1) {
      creationDate = "Today";
    } else if (days === 1) {
      creationDate = "1 day ago";
    } else {
      creationDate = `${days} days ago`;
    }

    const $tweet = `
    <article class="tweet">
    <header>
      <div>
      <img src="${avatar}" />
      <br>
      <span class="username">${name}</span>
      </div>
      <span class="handle">${handle}</span>
    </header>
    <p>${text}</p>
    <footer>
      <div class="tweet-date">
      ${creationDate}
      </div>
      <div class="tweet-icons">
        <span class="material-icons"> flag </span>
        <span class="material-icons"> repeat </span>
        <span class="material-icons"> favorite </span>
      </div>
    </footer>
  </article>
    `;

    return $tweet;

  }

  renderTweets(data);

})