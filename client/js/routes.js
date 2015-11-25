/*
 * Configuration
 */
Router.configure({
  layoutTemplate: "baseLayout",
  notFoundTemplate: "404",
  loadingTemplate: "baseLayout"
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

/*
 * Routes
 */
Router.route("/", function() {
  this.render("home");
});
Router.route("/signin", function() {
  if(Meteor.userId()) {
    this.render("attendance");
  } else {
    this.redirect("/");
  }
});
Router.route("/signinalt", function() {
  this.render("signinalt");
});
Router.route("/account", function() {
  if(Meteor.userId())
    this.render("account");
  else
    this.redirect("/");
});
Router.route("/user/:username", function() {
  var user = Meteor.users.findOne({username: this.params.username});
  if(!user) {
    this.render("404");
  } else {
    this.render("userProfile", {
      data: function() {
        return {
          user: user
        }
      }
    });
  }
});
