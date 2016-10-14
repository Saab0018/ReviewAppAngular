app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Submit a Review',
    'NAME': 'Nickname:',
    'REVIEW': 'Review:',

    'BUTTON': 'Submit Review',
    'TITLEREV': 'Reviews',
    'ERROR': "You can't add anymore reviews",
    'COUNT': 'Counter:',
    'OPTIONONE': "Created(asc)",
    'OPTIONTWO': "Created(dsc)"

  });

  $translateProvider.translations('fr', {
    'TITLE': 'Soumettre Une Critique',
    'NAME': 'Surnom:',
    'REVIEW': 'Critique:',
    'BUTTON': 'Soumettre',
    'TITLEREV': 'Critiques',
    'ERROR': "Vous ne pouvez pas ajouter d'autres commentaires",
    'COUNT': 'Compter',
    'OPTIONONE': "Créé(asc)",
    'OPTIONTWO': "Créé(dsc)"
  });

  $translateProvider.preferredLanguage('en');



  if (localStorage.getItem("languageChosen") == "undefined") {
    $translateProvider.preferredLanguage("en");
  } else {
    $translateProvider.preferredLanguage(localStorage.getItem("languageChosen"));
  }
   }]);

app.controller("translateController", function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
    localStorage.setItem('languageChosen', key);
  }
})