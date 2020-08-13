
  var mainApp = angular.module("myApp", ['ngRoute']);
  mainApp.config(['$routeProvider', function($routeProvider) {
     $routeProvider
     .when('/postsView', {
       template:'<h4>Posts List</h4> \
<table class="table table-striped"> \
<thead> \
 <tr> \
   <td>UserID</td> \
   <td>Id</td> \
   <td>Title</td> \
   <td>Body</td> \
 </tr> \
</thead> \
<tbody> \
 <tr ng-repeat="post in posts"> \
   <td> \
     {{post.userId}} \
   </td> \
   <td> \
     {{post.id}} \
   </td> \
   <td> \
     {{post.title}} \
   </td> \
   <td> \
     {{post.body}} \
   </td> \
   <td> \
     <button class="btn btn-danger btn-sm" ng-click="deletePost(post)">Delete</button> \
   </td> \
 </tr> \
</tbody> \
</table> \
</div>',
controller: 'postsController'
     })
     
     .when('/resourcesView', {
        template:'<h4>Resources List</h4> \
        <mat-card>Simple card</mat-card> \
<table class="table table-striped"> \
<thead> \
 <tr> \
   <td>ID</td> \
   <td>Name</td> \
   <td>Color</td> \
   <td>Year</td> \
   <td>Pantone Value</td> \
 </tr> \
</thead> \
<tbody> \
 <tr ng-repeat="resource in resources"> \
   <td> \
     {{resource.id}} \
   </td> \
   <td> \
     {{resource.name}} \
   </td> \
   <td style="background-color:{{resource.color}};"> \
     {{resource.color}} \
   </td> \
   <td> \
     {{resource.year}} \
   </td> \
   <td> \
     {{resource.pantone_value}} \
   </td> \
 </tr> \
</tbody> \
</table> \
</div>',
        controller: 'resourcesController'
     })
     
     .when('/loginView', {
        template: '<form> \
        <label for="fname">User Name</label> \
 <input type="text" id="fname" name="firstname" placeholder="Your name.."> \
 <label for="password">Passord</label> \
 <input type="text" id="lname" name="lastname" placeholder="Your Password.."> \
 <input type="submit" value="Submit"> \
 </form>',
        controller: 'LoginController'
     })
     .otherwise({
        redirectTo: '/postsView'
     });
  }]);
           
mainApp.controller('postsController', ['$scope', '$http', function($scope, $http) {

//Buttons Settings
$scope.id = true;

//Getting posts List
//$http GET function
$http({
method: 'GET',
url: 'https://jsonplaceholder.typicode.com/posts'
}).then(function successCallback(response) {

$scope.posts = response.data;

}, function errorCallback(response) {

alert("Error. Try Again!");

});

//Delete post
$scope.deletePost = function(post) {

//$http DELETE function
$http({

method: 'DELETE',
url: 'https://jsonplaceholder.typicode.com/posts/' + post.id

}).then(function successCallback(response) {

alert("Posts has been deleted Successfully");
var index = $scope.posts.indexOf(post);
$scope.posts.splice(index, 1);

}, function errorCallback(response) {

alert("Error. while deleting post Try Again!");

});

};

}]);


mainApp.controller('resourcesController', ['$scope', '$http', function($scope, $http) {

//Buttons Settings
$scope.id = true;

//Getting resource List
//$http GET function
$http({
method: 'GET',
url: 'https://reqres.in/api/unknown/3'
}).then(function successCallback(response) {

$scope.resources = response.data;

}, function errorCallback(response) {
alert("Error. Try Again!");
});

}]);

  
mainApp.controller('LoginController', ['$scope', '$http', function($scope, $http) {

//Buttons Settings
$scope.id = true;

//Getting resource List
//$http GET function
$http({
method: 'POST',
url: 'https://reqres.in/api/login'
}).then(function successCallback(response) {
$scope.resources = response.data;
}, function errorCallback(response) {

alert("Error. Try Again!");

});

}]);
 
