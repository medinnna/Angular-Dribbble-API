angular.module("DribbbleApp", [])
.controller("ProfileController", ["$scope","$http", function(s,h) {
  s.user_profile = [];

  h.get("http://api.dribbble.com/v1/users/carlosmdnv?access_token=767688c4fd47f9a4017a9413a0cf9c512b414ca1a64da3bb9bfd54549aa21f9a&per_page=100")
    .then(function successCallback(success) {
      s.user_profile = success.data;
    }, function errorCallback(err) {
      console.log(err);
    });
}])

.controller("ShotsController", ["$scope","$http", function(s,h) {
  s.shots = [];

  h.get("http://api.dribbble.com/v1/users/carlosmdnv/shots?access_token=767688c4fd47f9a4017a9413a0cf9c512b414ca1a64da3bb9bfd54549aa21f9a&per_page=100")
    .then(function successCallback(success) {
      s.shots = success.data;
    }, function errorCallback(err) {
      console.log(err);
    });
}]);
