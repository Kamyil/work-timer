import 'bootstrap';
import '../scss/main.scss';
import './components/date.ts';


let app = angular.module('app',[]);
declare var angular: any;
app.controller('tasksController', ['$scope', function($scope){

$scope.tasks = [];




$scope.addTask = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
  
    $scope.tasks.push({
      
        name: 'Another Task',
        start_hour: h,
        start_minute: m,
        end_hour: null,
        end_minute: null,
        time_spent: null
        
    });
 
}
$scope.deleteTask = function(){
    $scope.tasks.splice(this.$index, 1);
}
$scope.calculateMinutes = (task) => {

    let today = new Date();
    let time1 = today.setHours(task.start_hour);
    time1 = today.setMinutes(task.start_minute);
    
    let time2 = today.setHours(task.end_hour);
    time2 = today.setMinutes(task.end_minute);
    task.time_spent = (time2 - time1)/1000;
    task.time_spent = task.time_spent/60;

    return task.time_spent;


}
























}]);