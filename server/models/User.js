User = function(doc) {
  _.extend(this, doc);
}

_.extend(User.prototype, {
  fetchAttendences: function() {
    return this.profile.attendences;
  },
  addAttendence: function() {
    Meteor.users.update(this._id, {$inc: {"profile.attendences": 1}});
  }
});

Meteor.users._transform = function(doc) {
  return new User(doc);
}
