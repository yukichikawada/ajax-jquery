const FollowToggle = require("./follow_toggle");
const UsersSearch = require('./users_search');


$(document).ready(() => {
  console.log('Document is ready!');

  $('.follow-toggle').each( (idx, button) => {
    new FollowToggle(button);
  });

  $('.users-search').each((idx, search) => {
    new UsersSearch(search);
  });

});
