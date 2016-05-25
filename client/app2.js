var app = angular.module('myApp', []);

app.controller('myController', ['$http', function($http) {
  this.message = 'Angular1-2';
  this.members = [{
    name: 'Tanaka',
    age: 36
  }, {
    name: 'Suzuki',
    age: 16
  }, {
    name: 'Yamada',
    age: 26
  }];

  var that = this;
  this.items = [];

  this.onclick = function () {
    $http.get('http://localhost:3000').success(function(getData) {
      console.log(getData);
      that.items.push(getData);
    }).error(function(e) {
      console.log(e);
    });
  };

}]);
