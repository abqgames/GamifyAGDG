Handlebars.registerHelper("isAdmin", function() {
  var user = Meteor.user();
  if(user.profile.isAdmin) return true;
  return false;
});
