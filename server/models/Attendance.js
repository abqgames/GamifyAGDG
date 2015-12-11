Attendance = function(doc) {
  _.extend(this, doc);
}

Attendance.attend = function(userId) {
  Attendances.insert({userId: userId,
                      date: new Date()}); 
}

_.extend(Attendance.prototype, {
//  attend: function(userId) {}
});

Attendances = new Mongo.Collection("attendances", {
  transform: function(doc) {
    return new Attendance(doc);
  }
});
