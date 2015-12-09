Methods["user.reset.attendance"] = function() { 
  var user = Meteor.user();
  if(user.addAttendance(user._id))
    return {result: "success"};
  throw new Meteor.Error("Attendance failed");
};
Methods["user.updateName"] = function(name) { 
  var user = Meteor.user();
  console.log(name);
  user.updateName(name);
};
