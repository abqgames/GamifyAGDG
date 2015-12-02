Methods["user.attend"] = function(options) { 
  var user = Meteor.users.findOne({username: options.username});
  if(user.addAttendence(options))
    return {result: "success"};
  throw new Meteor.Error("Attendence failed");
};
Methods["user.updateName"] = function(name) { 
  var user = Meteor.user();
  console.log(name);
  user.updateName(name);
};
