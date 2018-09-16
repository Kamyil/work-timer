// import angular from 'angular';
// import ngStorage from 'ngstorage';
import 'bootstrap';
import 'angular-filter';
import '../scss/main.scss';
import './components/date.ts';
import './components/notificationToggleClass.ts';
import './components/table';



declare var angular: any;

const app = angular.module('app',['angular.filter']);
app.controller('tasksController', ['$scope', function($scope,$timeout){




$scope.tasks = [
    {
        name: 'Good morning! :)',
        start_hour: 8,
        start_minute: 0,
        end_hour: 8,
        end_minute: 30,
        time_spent: null
    }
];
let storage = $scope.tasks;
$scope.totalHours;



$scope.addTask = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let prefix = $scope.prefix;

    $scope.tasks.push({

        name: prefix,
        start_hour: h,
        start_minute: m,
        end_hour: h+1,
        end_minute: h+1,
        time_spent: null

    });
    storage = $scope.tasks;

}

$scope.addBreak = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    $scope.tasks.push({

        name: 'Przerwa',
        start_hour: h,
        start_minute: m,
        end_hour: h,
        end_minute: m+10,
        time_spent: null

    });
    storage = $scope.tasks;
}

$scope.deleteTask = function(){
    $scope.tasks.splice(this.$index, 1);
    const storage = $scope.tasks;
}
$scope.calcMins = (task) => {

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


$scope.saveData = () => {
    localStorage.setItem('storage', JSON.stringify($scope.tasks));


}
$scope.loadData = () => {

    $scope.tasks = JSON.parse(localStorage.getItem('storage'));

};


// Filters Hide and Show

$scope.togglerVisGroups = 'fa fa-angle-double-up';
$scope.togglerVisSingles = 'fa fa-angle-double-up';

$scope.changeTogglerClassGroups = () => {

    if ($scope.togglerVisGroups == "fa fa-angle-double-up"){
        $scope.togglerVisGroups = "fa fa-angle-double-down";
    }else{
        $scope.togglerVisGroups = "fa fa-angle-double-up";
    }

}
$scope.changeTogglerClassSingles = () => {

    if ($scope.togglerVisSingles == "fa fa-angle-double-up"){
        $scope.togglerVisSingles = "fa fa-angle-double-down";
    } else {
        $scope.togglerVisSingles = "fa fa-angle-double-up";
    }

}

// Auto save

window.setTimeout($scope.saveData,10000);




















}]);