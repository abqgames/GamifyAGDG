Template.attendence.events({
  "click #attendence-button": function(e) {
    Meteor.call("attend");    
    Router.go("/user/" + Meteor.user().username);
  }
});
