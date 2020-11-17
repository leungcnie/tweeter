$(document).ready(() => {

  const $textArea = $('textarea#tweet-text');

  const charCounter = function() {
    const input = $(this).val();
    const inputLength = input.length;

    console.log(140 - inputLength);
  }

  $textArea.on('input', charCounter);



})