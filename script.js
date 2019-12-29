
  var count1,count2;
app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
	
      var c1=1,c2=1,t1=0,t2=0,k=0,k1=0;
        $scope.t =5;
       $scope.x = 'black';
       $scope.x1 = 'black';
       $scope.showMe1 = false;
       $scope.showMe2 = false;
       $scope.showWinner1 = false;
       $scope.showWinner2 = false;
       $scope.score1 = 0,$scope.score2 = 0;
        $scope.clickOne = function() {
        	c1++;
        	if(c1%2==0)
        	{
        	$scope.x = 'blue';
        	$scope.showMe1 = !$scope.showMe1;
        	if(c2%2==0)
        	{
        		$scope.x1 = 'black';
        		$scope.showMe2 = !$scope.showMe2;
        		c2=1;
        	}
        	
        }
        else
        {
        	$scope.x = 'black';
        	$scope.showMe1 = !$scope.showMe1;
        }
    count1 = c1;
    count2 = c2;  
         
        }
        $scope.clickTwo = function() {
        	c2++;
        	if(c2%2==0)
        	{
        	$scope.x1 = 'blue';
        	$scope.showMe2 = !$scope.showMe2;
        	if(c1%2==0)
        	{
        		$scope.x = 'black';
        		$scope.showMe1 = !$scope.showMe1;
        		c1=1;
        	}
        }
        else
        {
        	$scope.x1 = 'black';
        	$scope.showMe2 = !$scope.showMe2;
        }
        	count1 = c1;
    count2 = c2;  
        
        }

        $scope.btnOne = function() {
        	t1++;
        	if($scope.t==0){
        		alert('No votes left');
        		$scope.score1=$scope.score1;
        		$scope.score2=$scope.score2;
        		main();
        	}
        	else
        	{
        		$scope.score1++;
        	}
        	if($scope.t == 0 ){
        		$scope.t=0;
        		k1=1;
        	}
        	else
        	{
        	$scope.t--;
            }
        	if($scope.t==0 && t1>t2 && k==0){
        	console.log('Pic 1 is winner');
        	if(t1-t2 <= 0){
        		$scope.score = 0;
        	}
        	else
        	{
        		$scope.score = t1-t2;
        	}
        	k=1;
        	$scope.showWinner1 = true;
        }
        else
        	if($scope.t==0 && t1<t2 && k==0){
        		console.log('Pic 2 is winner');
        		if(t2-t1 <= 0){
        		$scope.score = 0;
        	}
        	else
        	{
        		$scope.score = t2-t1;
        	}
        		k=1;
        		$scope.showWinner2 = true;
        	}
        }

        $scope.btnTwo = function() {
        	t2++;
        	if($scope.t==0){
        		alert('No votes left');
        		$scope.score1=$scope.score1;
        		$scope.score2=$scope.score2;
        		main();
        	}
        	else
        	{
        		$scope.score2++;
        	}
        	if($scope.t == 0){
        		$scope.t=0;
        		
        	}
        	else
        	{
        	$scope.t--;
            }
        	if($scope.t==0 && t1>t2 && k==0){
        	console.log('Pic 1 is winner');
        	if(t1-t2 <= 0){
        		$scope.score = 0;
        	}
        	else
        	{
        		$scope.score = t1-t2;
        	}
        	$scope.showWinner1 = true;
        	k=1;
        }
        else
        	if($scope.t==0 && t1<t2 && k==0){
        		console.log('Pic 2 is winner');
        		if(t2-t1 <= 0){
        		$scope.score = 0;
        	}
        	else
        	{
        		$scope.score = t2-t1;
        	}
        		$scope.showWinner2 = true;
        		k=1;
        	}
        	
        }

        
        // $scope.showMe = false;

        // $scope.clickImg01 = function() {
        // 	$scope.showMe = !$scope.showMe;
        // }

});

// var submit = function() {

// 	if(count1%2==0){
// 		confirm(`Pic1 is selected `);
// 		x = 'black;'
// 	}
// 	else
// 		if(count2%2==0)
// 	{
// 		confirm('pic 2 is selected');
// 		x1 = 'black';
// 	}
// 	else
// 	{
// 		alert('Plz LIKE ONE pic before submiting')
// 	}
// }