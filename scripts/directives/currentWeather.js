angular.module('weatherApp')
  .directive('currentWeather', currentWeather);

  function currentWeather() {
    var directive = {
      scope: {
        city: '@'
      },
      restrict: 'E',
      templateUrl: '../../templates/currentWeather.html',
      replace: true,
      controllerAs: 'currentWeatherCtrl',
      controller: currentWeatherController
    };


currentWeatherController.$inject = ['$http', '$scope'];

function currentWeatherController ($http, $scope) {
    var vm = this;
    vm.place = $scope.city;

    vm.getWeather = function(city){
      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + vm.place + '&appid=9a16c964ca08ccb472cade68c090cdcd'
      }).then(onSuccess, onError);

      function onSuccess(res){
        console.log(res);
        vm.weather = res.data;
      };

      function onError(res){
        console.log(res);
      };
    };
    vm.getWeather($scope.city);
  };

  return directive;
};
