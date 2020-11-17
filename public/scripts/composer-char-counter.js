$(document).ready(() => {
  // Target textarea
  const $textArea = $('textarea#tweet-text');

  // Input event listener
  const charCounter = function() {
    const input = $(this).val();
    const charsLeft = 140 - input.length;

    const div = $(this).parent().children()[2];
    const counter = $(div).children()[1]; // Get counter DOM node
    $(counter).text(charsLeft);
  }

  // Calls charCounter on input event
  $textArea.on('input', charCounter);

})