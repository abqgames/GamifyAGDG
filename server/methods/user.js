Methods["user.attend"] = function() { 
  var user = Meteor.user();
  if(user.addAttendence(user._id))
    return {result: "success"};
  console.log("failed");
  throw new Meteor.Error("Attendence failed");
};
