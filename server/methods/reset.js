Methods["user.reset.attendence"] = function() { 
  var user = Meteor.user();
  if(user.addAttendence(user._id))
    return {result: "success"};
  throw new Meteor.Error("Attendence failed");
};
Methods["user.updateName"] = function(name) { 
  var user = Meteor.user();
  console.log(name);
  user.updateName(name);
};
