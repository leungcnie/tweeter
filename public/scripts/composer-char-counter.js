$(document).ready(() => {

  const $textArea = $('textarea#tweet-text');

  // Input event listener
  const charCounter = function () {
    const input = $(this).val();
    const charsLeft = 140 - input.length;

    // Create link tag to invalid red counter CSS
    const link = $('<link>').attr({ 'rel': 'stylesheet', 'href': '/styles/invalid-counter.css', 'type': 'text/css' });

    if (charsLeft < 0) {
      $('head').append(link);
    } else {
      $("[href='/styles/invalid-counter.css']").remove();
    }

    const div = $(this).parent().children()[2];
    const counter = $(div).children()[1]; // Get counter DOM node
    $(counter).text(charsLeft);
  }

  // Calls charCounter on input event
  $textArea.on('input', charCounter);

})