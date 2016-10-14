app.controller('reviewController', ['$scope', 'Pagination', function ($scope, Pagination) {

  $scope.reviews = [];
  $scope.time = new Date();
  $scope.index = 1;
  $scope.pagination = Pagination.getNew(2);



  $scope.addDetail = function () {
    if ($scope.reviews.length < 10) {
      $scope.reviews.push({
        id: $scope.index,
        nickname: $scope.nickname,
        text: $scope.reviewText,
        time: $scope.time
      });

      $scope.index++

        $scope.disabled = false;
      $scope.show = false;
      $scope.nickname = "";
      $scope.reviewText = "";


      console.dir($scope.reviews);



      $scope.pagination.numPages = Math.ceil($scope.reviews.length / $scope.pagination.perPage);
    } else {
      $scope.show = true;
      $scope.disabled = true;
    }
  };









}]);