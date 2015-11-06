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
    /*
     * REMOVED FOR DEVELOPMENT 
     * XXX: Add back later
     * var daysElapsed = (new Date() - this.profile.lastAttendence)/(1000*60*60*24);
     */
    var daysElapsed = 7;
    if(daysElapsed > 6) {
      Meteor.users.update(this._id, {
        $inc: {"profile.attendences": 1},
        $currentDate: {"profile.lastAttendence": true}
      });
      /*
       * XXX: This is a messy way of doing this. Is it possible to keep the
       * ram version of the user in sync elegantly?
       */
      this.profile = Meteor.users.findOne(this._id).profile;
      /*
       * End messy
       */
      this.calculateExperience();
      return true;
    }
    return false;
  },
  /*
   * Calculates the user's experience and returns it as an integer
   * (unused)
   */
  calculateExperience: function() {
    var total = 0;
    total += this.profile.attendences * 50;
    console.log("experience: " + total);
    Meteor.users.update(this._id, {$set: {"profile.experience": total}});
    return total;
  }
});

Meteor.users._transform = function(doc) {
  return new User(doc);
}
