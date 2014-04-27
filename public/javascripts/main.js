
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


  app.service("TodoService", function() {

    var __tasks = [
      {id: 1, name: "Brush teeth", description: "For a healthy smile!"},
      {id: 2, name: "Sleep", description: "Zzzzz"}
    ]

    var __current_index = 3

    this.getTasks = function(callback) {
      setTimeout(function() {
        callback(null, __tasks)
      }, 1)
    }


    this.addTask = function(task, callback) {
      setTimeout(function() {
        task.id = __current_index++        
        __tasks.push(task)
        callback(null, task)
      }, 1)
    }

    this.removeTask = function(task_id, callback) {
      setTimeout(function() {
        var result = false

        for(var i = 0; i < __tasks.length; ++i) {
          var t = __tasks[i]
          if(t.id === task_id) {
            __tasks.splice(i, 1)
            result = true
            break
          }
        }

        callback(null, result)
      }, 1)
    }

  })


  app.controller("TodoCtrl", ['$scope', "TodoService", function($scope, TodoService) {

    $scope.new_task = {
      name: "Learn Angular",
      description: "Because brain."
    }

    $scope.remove = function(task_id) {
      TodoService.removeTask(task_id, function(err, result) {
        $scope.refresh()
      })
    }

    $scope.add = function() {
      TodoService.addTask($scope.new_task, function() {
        $scope.refresh()
      })

      $scope.new_task = {name: "", description: ""}      
    }

    $scope.$watch('new_task.name', function(newVal, oldVal, scope) {
      $scope.is_invalid = ($scope.new_task.name.length == 0)
    })


    $scope.refresh = function() {
      TodoService.getTasks(function(err, tasks) {
        $scope.tasks = tasks
        $scope.$apply()
      })
    }

    $scope.refresh()

  }])


  angular.element().ready(function() {
    angular.resumeBootstrap();
  });
})


