app.controller('buttonController', ['$scope', function ($scope) {

  $scope.english = function () {

    document.getElementById('frenchBtn').style.visibility = 'hidden';
    document.getElementById('englishBtn').style.visibility = 'hidden';
    document.getElementById("changeBtn").className = "";
    document.getElementById("reviewScreen").className = "";
    document.getElementById("title").className = "hidden";
  };

  $scope.french = function () {

    document.getElementById('frenchBtn').style.visibility = 'hidden';
    document.getElementById('englishBtn').style.visibility = 'hidden';
    document.getElementById("reviewScreen").className = "";
    document.getElementById("changeBtnTwo").className = "";
    document.getElementById("title").className = "hidden";

  };

  $scope.changeLang = function () {
    document.getElementById("changeBtn").className = "hidden";
    document.getElementById("changeBtnTwo").className = "hidden";
    document.getElementById('frenchBtn').style.visibility = '';
    document.getElementById('englishBtn').style.visibility = '';

  }




}])