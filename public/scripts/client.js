/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  // Hide error message
  $('#error-msg').hide();

  // Append each tweet element to #tweets-container
  const renderTweets = function(tweets) {
    const tweetsContainer = $('#tweets-container').html('');
    for (let i = tweets.length - 1; i >= 0; i--) {
      let $tweet = createTweetElement(tweets[i]);
      tweetsContainer.append($tweet);
    }
  };

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
      <p>${escape(tweetObj.content.text)}</p>
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

  };

  // Submit form data using AJAX
  $('form').submit((event) => {
    event.preventDefault();
    $('#error-msg').slideUp();
    const tweetText = $('#tweet-text').val();
    const isTweetValid = validateTweet(tweetText);

    if (isTweetValid) {
      const queryString = $('#tweet-text').serialize();
      $.post('/tweets', queryString, () => {
        $('#tweet-text').val('');
        $('.counter').val('140');
        $('.counter').css('color', '#545149');
        loadTweets();
      });
    }
  });

  // Fetch tweets from /tweets page
  const loadTweets = () => {
    $.get('/tweets', (data) => {
      renderTweets(data);
    });
  };

  // HELPER FUNCTIONS

  // Get string of days elapsed
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
  };

  // Convert text to XSS safe text
  const escape = (text) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  };

  // Validate tweet text; if invalid, return error message
  const validateTweet = (tweetText) => {
    if (!tweetText) {
      $('#error-text').text("Woops! You can't submit an empty tweet!");
      $('#error-msg').slideDown();
      return false;
    }
    if (tweetText.length > 140) {
      $('#error-text').text("Too long! Maximum length is 140 characters.");
      $('#error-msg').slideDown();
      return false;
    }

    return true;
  };

  // Load tweets on page load
  loadTweets();
});