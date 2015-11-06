User = function(doc) {
  _.extend(this, doc);
  if(!this.profile)
    this.profile = {};
  if(!this.profile.lastAttendence)
    this.profile.lastAttendence = new Date("01/01/1970");
}

_.extend(User.prototype, {
  /*
   * Add 1 attendence to the user
   * Can only be called once every 6 days
   */
  addAttendence: function() {
    var daysElapsed = (new Date() - this.profile.lastAttendence)/(1000*60*60*24);
    if(daysElapsed > 6) {
      Meteor.users.update(this._id, {
        $inc: {"profile.attendences": 1},
        $currentDate: {"profile.lastAttendence": true}
      });
      console.log("attended successfully");
      return true;
    }
    console.log("attended unsuccessfully");
    return false;
  },
  /*
   * Calculates the user's experience and returns it as an integer
   * (unused)
   */
  getExperience: function() {
    var total = 0;
    total += this.profile.attendences * 50;
    console.log("experience: " + total);
    return total;
  }
});

Meteor.users._transform = function(doc) {
  return new User(doc);
}
