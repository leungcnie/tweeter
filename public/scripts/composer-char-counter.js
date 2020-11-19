$(document).ready(() => {

  const $textArea = $('textarea#tweet-text');

  // Input event listener
  const charCounter = function() {
    const input = $(this).val();
    const charsLeft = 140 - input.length;

    // Get counter element
    const div = $(this).parent().children()[2];
    const counter = $(div).children()[1];
    $(counter).text(charsLeft);

    // If characters over limit, display red counter
    if (charsLeft < 0) {
      $(counter).css('color', 'red');
    } else {
      $(counter).css('color', '#545149');
    }
  };

  // Calls charCounter on input event
  $textArea.on('input', charCounter);

});