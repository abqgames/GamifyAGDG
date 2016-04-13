User = function(doc) {
  _.extend(this, doc);
  if(!this.profile)
    this.profile = {};
  if(!this.profile.lastAttendance)
    this.profile.lastAttendance = new Date("01/01/1970");
}

_.extend(User.prototype, {
  /*
   * Add 1 attendance to the user
   * Can only be called once every 6 days
   */
  addAttendance: function(options) {
    var daysElapsed = (new Date() - this.profile.lastAttendance)/(1000*60*60*24);
    if((options.force && Meteor.user().profile.isAdmin) || daysElapsed > 6) {
      Meteor.users.update(this._id, {
        $inc: {"profile.attendances": 1},
        $currentDate: {"profile.lastAttendance": true}
      });
      Attendance.attend(this._id);
      this.profile = Meteor.users.findOne(this._id).profile;
      this.calculateExperience();
      return true;
    }
    return false;
  },
  /*
   * Calculates the user's experience and returns it as an integer
   */
  calculateExperience: function() {
    var total = 0;
    //total += this.profile.attendances * 50;
    total += Attendances.find({userId: this._id}).count() * 50;
    Meteor.users.update(this._id, {$set: {"profile.experience": total}});
    return total;
  },
  /*
   * Changes the user's real name
   */
  updateName: function(name) {
    if(name.first) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": name.first}});
    }
    if(name.last) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": name.last}});
    }
  },
  /*
   * Reset the user's attendances
   */
  resetAttendance: function() {
    throw new Meteor.Error("Function not yet written");
  }
});

Meteor.users._transform = function(doc) {
  return new User(doc);
}
