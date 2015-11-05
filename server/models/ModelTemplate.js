Foo = function(doc) {
  _.extend(this, doc);
}

/*
 * Your medthods here
 */
_.extend(Foo.prototype, {
  exampleFunction: function(bar) {
    return "foo"; 
  }
});

Foos = new Mongo.Collection("foos", {
  transform: function(doc) {
    return new Foo(doc);
  }
});
