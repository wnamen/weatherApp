angular.module('weatherApp')
  .controller('currentWeatherController', currentWeatherController);

function currentWeatherController(){
  var vm = this;
  vm.cities = ['San Francisco',  'Oakland', 'San Jose', 'Sacramento', 'Fresno', 'Bakersfield', 'Los Angeles', 'San Diego']
}
