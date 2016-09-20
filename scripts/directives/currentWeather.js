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
      controller: ['$http', '$scope', function ($http, $scope){
        var vm = this;
        vm.place = $scope.city;

        $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?q=' + vm.place + '&appid=9a16c964ca08ccb472cade68c090cdcd'
        }).then(getWeather, onError);

        function getWeather(res){
          console.log(res);
          vm.weather = res.data.weather[0].description;
        };

        function onError(res){
          console.log(res);
        };
      }]
    };
    return directive;
  }
