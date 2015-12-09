Template.attendance.events({
  "click #attendance-button": function(e) {
    Meteor.call("user.attend", {username: Session.get("username")}, function(err, res) {
      if(err)
        console.log(err);
      else
        Router.go("/user/" + Meteor.user().username);
    });    
  }
});
