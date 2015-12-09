Methods["user.attend"] = function(options) { 
  var user = Meteor.users.findOne({username: options.username});
  if(user.addAttendance(options))
    return {result: "success"};
  throw new Meteor.Error("Attendance failed");
};
Methods["user.updateName"] = function(name) { 
  var user = Meteor.user();
  console.log(name);
  user.updateName(name);
};
