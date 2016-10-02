var celula = [];
var numLinhas = 3;
var numColunas = 3;

for (var i = 0; i < numLinhas; i++) {
    celula[i] = new Array(numColunas); //gerador de matriz
}

function pegarElementos(){

    formSelectHTML = document.getElementById('select');
    matrizHTML = document.getElementById('matriz'); 
}

var valoresCelula = [];

function salvarMatriz(matriz){ 
    for (var i = 0; i < (matriz.length - 1); i++) {
        if (matriz.elements[i].value == 1){
            valoresCelula.push(1)
        } else {
            matriz.elements[i].value = 0;
            valoresCelula.push(0)
        }
    }
    criarMatrizCelular(valoresCelula);
}

function criarMatrizCelular(valoresCelula) {
    for(var i = 0; i < celula.length; i++) {
        for(var j = 0; j < celula[i].length; j++) {
            celula[i][j] = valoresCelula[i*celula.length+j];
        }
    }   
}

function selecionarCelula(formSelect){
    for (var i = 0; i < formSelect.length - 1; i++) {
        if (formSelect.elements[i].checked) {;
            x = (formSelect.elements[i].id).substring(1,2);
            y = (formSelect.elements[i].id).substring(2,3);
            x = parseInt(x);
            y = parseInt(y);
            checarVida(x,y);
            retornarEstadoCelula(resultado);
        }
    }
}

function contarVizinhos(eixoX,eixoY) {

	var numVizinhos = 0;
	var maxLinha = 2;
	var maxColuna = 2;

	 // vizinho a esquerda
    if (eixoY - 1 >= 0){
      numVizinhos += celula[eixoX][eixoY-1];
    }
    // vizinho a direita
    if (eixoY + 1 <= maxColuna){
      numVizinhos += celula[eixoX][eixoY+1];
    }
    
    // vizinho acima
    if (eixoX - 1 >= 0){
      numVizinhos += celula[eixoX-1][eixoY];
    }
    
    // vizinho abaixo
    if (eixoX + 1 <= maxLinha){
      numVizinhos += celula[eixoX+1][eixoY];
    }
    
    // vizinho cima - esquerda
    if ( (eixoY - 1 >= 0) && (eixoX - 1 >= 0) ){
      numVizinhos += celula[eixoX-1][eixoY-1];
    }

    // vizinho cima - direita
    if ( (eixoX - 1 >= 0) && (eixoY + 1 <= maxColuna) ){
      numVizinhos += celula[eixoX-1][eixoY+1];
    }

    // vizinho baixo - esquerda
    if ( (eixoX + 1 <= maxLinha) && (eixoY - 1 >= 0) ){
      numVizinhos += celula[eixoX+1][eixoY-1];
    }
    
    // vizinho baixo - direita
    if ( (eixoX + 1 <= maxLinha) && (eixoY + 1 <= maxColuna) ){
      numVizinhos += celula[eixoX+1][eixoY+1];
    }
	
	return numVizinhos;
}

var resultado;

function checarVida (eixoX,eixoY) { 

	celulaTeste = celula[eixoX][eixoY];
    vizinhos = contarVizinhos(eixoX,eixoY);

    if (celulaTeste == 1 && vizinhos < 2) {
    	resultado = "Morta por baixa populacao";
    	return 0;
    }
    if (celulaTeste == 1 && vizinhos > 3) { 
    	resultado = "Morta por alta populacao";
    	return 0;
    }
    if (celulaTeste == 1 && (vizinhos == 2 || vizinhos == 3)) {
    	resultado = "A celula continua viva";
    	return 1;
    }
    if (celulaTeste == 0 && vizinhos == 3) {
    	resultado = "A celula revive";
    	return 1;
    }
    resultado = "A celula continua morta";
    return 0;
    
};

function retornarEstadoCelula(resultado){
    document.getElementById("resultado").innerHTML = resultado;
}






