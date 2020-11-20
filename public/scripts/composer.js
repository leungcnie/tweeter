// Stretch functionality

$(document).ready(() => {

  // Show/hide compose tweets section when button is pressed
  $('#compose-btn').click(() => {
    const display = $('.new-tweet').css('display');
    console.log(display);
    if (display === 'none') {
      $('.new-tweet').slideDown();
      $('textarea').val('').focus();
      $('.counter').val('140');
      $('.counter').css('color', '#545149');
    } else {
      $('.new-tweet').slideUp();
      $('#error-msg').slideUp();
    }
  });
  
});