Template.achievements.helpers({
  borderStyle: function(user) {
    var attendances = 50;
    return "border-right: " + attendances + "px solid red;";
  },
  blueColor : function(user) {
    var attendances = user.profile.attendances;
    var blueWithMultiplier = attendances * 5;
    return "border-color: rgb(255, 54, " + blueWithMultiplier + ")";
  },
  achievements:  function(user) {
    var output = [];
    if(user.profile == undefined) return output;
    for(var i = 0; i < Achievements.length; i++) {
      var a = Achievements[i];
      var criteriaKeys = Object.keys(a.criteria);
      for(var j = 0; j < criteriaKeys.length; j++) {
        var criteria = criteriaKeys[j];
        if(user.profile[criteria] >= a.criteria[criteria]) {
          console.log("achieved");
          //if the user's stat is greater than the relevant criteria, add it to the list
          output.push(a);
        }
      }
    }
    return output;
  }
});
