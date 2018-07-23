import 'bootstrap';
import '../scss/main.scss';
import './components/date.ts';

let app = angular.module('app',[]);
let savedTasks = {};
declare var angular: any;
app.controller('tasksController', ['$scope', function($scope){

$scope.tasks = [];
$scope.totalHours; 



$scope.saveData = () => {
    window.localStorage.setItem("savedTasks",JSON.stringify($scope.tasks));
}
$scope.loadData = () => {
    $scope.tasks = window.localStorage.getItem("savedTasks");
    JSON.parse($scope.tasks);
}


$scope.addTask = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
  
    $scope.tasks.push({
      
        name: 'Task',
        start_hour: h,
        start_minute: m,
        end_hour: h+1,
        end_minute: h+1,
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

function convertMinsToHrsMins(mins:number){
    let h:any = Math.floor(mins / 60);
    let m:any = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
  }
$scope.getTotal = () => {
    let total:any = 0;
    angular.forEach($scope.tasks, (task) => {
      total += task.time_spent;
    });
    total = convertMinsToHrsMins(total);
    return total+'h';
}





















}]);