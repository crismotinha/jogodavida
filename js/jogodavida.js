var celula = [[],[],[]]; 
for (var i = 0; i<3; i++) {
	celula[i] = [[],[],[]]; //cria a matriz 3x3
}

function contarVizinhos(i,j) {

	var numVizinhos = 0;
	var maxLinha = 2;
	var maxColuna = 2;

	 // vizinho a esquerda
    if (j - 1 >= 0){
      numVizinhos += celula[i][j-1];
    }
    // vizinho a direita
    if (j + 1 <= maxColuna){
      numVizinhos += celula[i][j+1];
    }
    
    // vizinho acima
    if (i - 1 >= 0){
      numVizinhos += celula[i-1][j];
    }
    
    // vizinho abaixo
    if (i + 1 <= maxLinha){
      numVizinhos += celula[i+1][j];
    }
    
    // vizinho cima - esquerda
    if ( (j - 1 >= 0) && (i - 1 >= 0) ){
      numVizinhos += celula[i-1][j-1];
    }

    // vizinho cima - direita
    if ( (i - 1 >= 0) && (j + 1 <= maxColuna) ){
      numVizinhos += celula[i-1][j+1];
    }

    // vizinho baixo - esquerda
    if ( (i + 1 <= maxLinha) && (j - 1 >= 0) ){
      numVizinhos += celula[i+1][j-1];
    }
    
    // vizinho baixo - direita
    if ( (i + 1 <= maxLinha) && (j + 1 <= maxColuna) ){
      numVizinhos += celula[i+1][j+1];
    }
	
	return numVizinhos;
}


function checarVida (i,j) { 

	celulaTeste = celula[i][j];
    vizinhos = contarVizinhos(i,j);

    if (celulaTeste == 1 && vizinhos < 2) {
    	document.getElementById("resultado").innerHTML = "Morta por baixa populacao";
    	return 0;
    }
    else if (celulaTeste == 1 && vizinhos > 3) { 
    	document.getElementById("resultado").innerHTML = "Morta por alta populacao";
    	return 0;
    }
    else if (celulaTeste == 1 && (vizinhos == 2 || vizinhos == 3)) {
    	document.getElementById("resultado").innerHTML = "A celula continua viva";
    	return 1;
    }
    else if (celulaTeste == 0 && vizinhos == 3) {
    	document.getElementById("resultado").innerHTML = "A celula revive";
    	return 1;
    }
    else {
    	document.getElementById("resultado").innerHTML = "A celula continua morta";
        return 0;
    }

};

function pegarElementos(){

    formSelectHTML = document.getElementById('select');
    matrizHTML = document.getElementById('matriz');
    console.log("carreguei")  
}

function selecionarCelula(formSelect){
    for (var i = 0; i<formSelect.length; i++) {
        if (formSelect.elements[i].checked) {;
            x = (formSelect.elements[i].id).substring(1,2);
            y = (formSelect.elements[i].id).substring(2,3);
            x = parseInt(x);
            y = parseInt(y);
            checarVida(x,y);
        }
    }
    
}

function salvarMatriz(matriz){ 
    for (var i = 0; i<(matriz.length -1); i++) {
        x = (matriz.elements[i].id).substring(0,1);
        y = (matriz.elements[i].id).substring(1,2);
        x = parseInt(x);
        y = parseInt(y);
        if (matriz.elements[i].value == 1){
            celula[x][y] = 1;
        } else {
            matriz.elements[i].value = 0;
            celula[x][y] = 0;
        }
    }
    return 1;
}


