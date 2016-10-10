// your code

var app = angular.module("MyApp", []);

app.controller("FazendaCtrl", function($scope, $http){
	$http.get('http://localhost:7007/fazenda.json').
	success(function(result){
		//console.log(result);

		for (var j = 0; j < result.data.length; j++){
			if(result.data[j].positive === null){
	        	result.data[j].positive = 0;
	        }
	        if(!result.data[j].hasOwnProperty("negative")){
	        	result.data[j].negative = 0;
	        }
			result.data[j].positive = parseInt(result.data[j].positive);
		}

		$scope.rankings = result.data;

		// Resultados Positivos
		$scope.GetTotalPos = function () {
		  var total = 0;
		    for(var i = 0; i < result.data.length; i++){
		        total += parseFloat(result.data[i].positive);
		    }
		    return total;
		}

		// Resultados Negativos
		$scope.GetTotalNeg = function () {
		  var total = 0;
		    for(var i = 0; i < result.data.length; i++){
		        total += parseFloat(result.data[i].negative);
		    }
		    return total;
		}

	});
});

