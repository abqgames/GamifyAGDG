Template.userProfile.helpers({
  experience: function(user) {
    /*
     * Likely want to move this to a server side function in case the value ever needs to be used on the server
     */
    return user.profile.attendences * 50;
  }
});
