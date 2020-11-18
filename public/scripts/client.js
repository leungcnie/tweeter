/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // Append each tweet element to #tweets-container
  const renderTweets = function (tweets) {
    for (let i = tweets.length - 1; i >= 0; i--) {
      let $tweet = createTweetElement(tweets[i]);
      $('#tweets-container').append($tweet);
    }
  }

  // Create tweet <article> element from tweet object
  const createTweetElement = (tweetObj) => {
    const user = tweetObj.user;
    let creationDate = getDays(tweetObj.created_at);

    const $tweet = `
    <article class="tweet">
      <header>
        <div>
          <img src="${user.avatars}" />
          <br>
          <span class="username">${user.name}</span>
        </div>
        <span class="handle">${user.handle}</span>
      </header>
      <p>${tweetObj.content.text}</p>
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

  // Helper function to get string of days elapsed
  const getDays = (timestamp) => {
    const deltaSeconds = (Date.now() - timestamp) / 1000;
    const days = Math.floor(deltaSeconds / 86400); // 86400 seconds in a day
    if (days < 1) {
      return "Today";
    } else if (days === 1) {
      return "1 day ago";
    } else {
      return `${days} days ago`;
    }
  }

  // Submit form data using AJAX
  $('form').submit((event) => {
    event.preventDefault();
    const queryString = $('form').serialize();
    $.post('/tweets', queryString);
  })

  // Fetch tweets from /tweets page
  const loadTweets = () => {
    $.get('/tweets', (data, status) => {
      renderTweets(data);
    })
  }

  loadTweets();

})