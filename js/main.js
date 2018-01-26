
$(document).ready(function() {
  $("a:first").focus();
});

//app
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html.htm"
    })
    .when("/css", {
        templateUrl : "css.htm"
    })
    .when("/js", {
        templateUrl : "js.htm"
    })
    .when("/angular", {
        templateUrl : "angular.htm"
    });
  });
