Template.userProfile.helpers({
	
});
Template.userProfile.events({
  "click #addAttendance": function(e) {
    Meteor.call("user.attend", {username: e.target.dataset.username,
                                force: true});
  }
});
