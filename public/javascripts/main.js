
requirejs.config({
  baseUrl: "/javascripts",

  paths: {
    "jquery":    "jquery-1.11.0.min",
    "bootstrap": "bootstrap.min",
    "angular":   "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.2/angular"
  },

  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    "angular": {
      exports: 'angular'
    }
  }
})


//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

requirejs(['jquery', 'bootstrap', 'angular'], function($) {
  var app = angular.module('MyApp', [])

  app.controller("MyController", function($scope) {
    
  })

  angular.element().ready(function() {
    angular.resumeBootstrap();
  });
})


