
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


requirejs(['jquery', 'bootstrap', 'angular'], function($) {
  
})


