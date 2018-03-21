const FollowToggle = require("./follow_toggle");


$(document).ready(() => {
  console.log('Document is ready!');

  $('.follow-toggle').each( (idx, button) => {
    new FollowToggle(button);
  });

});
