Methods.attend = function() { 
  var user = Meteor.user();
  user.addAttendence(user._id);
};
