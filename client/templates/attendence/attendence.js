Template.attendence.events({
  "click #attendence-button": function(e) {
    Meteor.call("user.attend", function(err, res) {
      if(err)
        console.log(err);
      else
        Router.go("/user/" + Meteor.user().username);
    });    
  }
});
