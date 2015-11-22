Template.account.helpers({
  getName: function(whichName) {
    var user = Meteor.user();
    if(!user) return;
    var name = "";
    if(whichName == "first") {
      if(user.profile && user.profile.firstName)
        name = user.profile.firstName;
      else
        name = "First Name";
    } else if(whichName == "last") {
      if(user.profile && user.profile.lastName)
        name = user.profile.lastName;
      else
        name = "Last Name";
    }
    return name;
  }
});

Template.account.events({
  "submit #updateName": function(e) {
    e.preventDefault();
    Meteor.call("user.updateName", {
      first: e.target.querySelector("#firstName").value,
      last: e.target.querySelector("#lastName").value
    });
  }
});
