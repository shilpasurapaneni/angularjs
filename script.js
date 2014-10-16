// Code goes here

(function() {
  var app = angular.module("viewModule", []);
  var mainCtrl = function($scope, $http) {


    $scope.message = "Hello Plunker";
    var onRepos = function(response) {
      $scope.repos = response.data;
    }
    $scope.sortOrder = "name";

    var onUserLoad = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError)
    };

    var onError = function(reason) {
      $scope.error = "sorry";
    }
    $scope.search = function(username) {

      $http.get("https://api.github.com/users/" + username).then(onUserLoad, onError);

    }

  }
  app.controller("mainCtrl", ["$scope", "$http", mainCtrl]);
}());
