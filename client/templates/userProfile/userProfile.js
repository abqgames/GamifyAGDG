Template.userProfile.helpers({

});
Template.userProfile.events({
  "click #addAttendence": function(e) {
    Meteor.call("user.attend", {username: e.target.dataset.username,
                                force: true});
  }
});
