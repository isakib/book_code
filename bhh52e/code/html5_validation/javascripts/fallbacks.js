/***
 * Excerpted from "HTML5 and CSS3 Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/bhh52e for more book information.
***/
var applyPlaceholders = function(){
  $("input").placeholder();
}

Modernizr.load([
  {
    test: Modernizr.placeholder,
    nope: "javascripts/jquery.placeholder.js",
    callback: function(url, result){
      if (!result){
        applyPlaceholders();
      }
    }
  }
  , 
  {
    test: Modernizr.pattern && Modernizr.required,
    nope: "javascripts/h5f.min.js",
    callback: function(url, result){
      if (!result) {
        configureHSF();
      }
    }
  }
]);

var configureHSF = function(){
  H5F.setup(document.getElementById("create_account"));
};



