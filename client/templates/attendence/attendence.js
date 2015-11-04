Template.attendence.events({
  "click #attendence-button": function(e) {
    Meteor.call("attend");    
  }
});
