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
  addAttendence: function(options) {
    console.log("tried to add");
    /*
     * REMOVED FOR DEVELOPMENT 
     * XXX: Add back later
     * var daysElapsed = (new Date() - this.profile.lastAttendence)/(1000*60*60*24);
     */
    var daysElapsed = 7;
    if((options.force && Meteor.user().profile.isAdmin) || daysElapsed > 6) {
      Meteor.users.update(this._id, {
        $inc: {"profile.attendences": 1},
        $currentDate: {"profile.lastAttendence": true}
      });
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
    total += this.profile.attendences * 50;
    console.log("experience: " + total);
    Meteor.users.update(this._id, {$set: {"profile.experience": total}});
    return total;
  },
  /*
   * Changes the user's real name
   */
  updateName: function(name) {
    console.log(name);
    if(name.first) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": name.first}});
    }
    if(name.last) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": name.last}});
    }
  },
  /*
   * Reset the user's attendences
   */
  resetAttendence: function() {
    throw new Meteor.Error("Function not yet written");
  }
});

Meteor.users._transform = function(doc) {
  return new User(doc);
}
