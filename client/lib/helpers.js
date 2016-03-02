Handlebars.registerHelper("isAdmin", function() {
  var user = Meteor.user();
  if(user == undefined) return false;
  if(user.profile == undefined) return false;
  if(user.profile.isAdmin) return true;
  return false;
});
