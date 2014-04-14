
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

  app.controller("TodoCtrl", function($scope) {
    $scope.tasks = [
      {name: "Brush teeth", description: "For a healthy smile!"},
      {name: "Sleep", description: "Zzzzz"}
    ]

    $scope.new_task = {
      name: "Learn Angular",
      description: "Because brain."
    }

    $scope.remove = function(index) {
      $scope.tasks.splice(index, 1)
    }

    $scope.add = function() {
      $scope.tasks.push($scope.new_task)
      $scope.new_task = {name: "", description: ""}
    }

    $scope.$watch('new_task.name', function(newVal, oldVal, scope) {
      $scope.is_invalid = ($scope.new_task.name.length == 0)
    })
  })


  angular.element().ready(function() {
    angular.resumeBootstrap();
  });
})


