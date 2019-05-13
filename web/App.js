//Modulo
var imcModulo = angular.module('imcApp', []);

//Controler
imcModulo.controller('imcController', function($scope) {
    
    //Função para calcular o IMC do usuário
    $scope.calcularIMC = function (){
        //Calcular o IMC
        $scope.result = $scope.gasolina /$scope.alcool ;
        //Decisão
        if ($scope.result <= 0.7){
            $scope.situacao = 'abastecer com gasolina';
        }else if ($scope.result > 0.7){
            $scope.situacao = 'abastecer com álcool';
        }
        $scope.exibeResultados = true;
    }
    
    //Função para esconder os resultados
    //$scope.esconderIMC = function (){
      //  $scope.exibeResultados = false;
    //}
    
});