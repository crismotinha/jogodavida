var expect = chai.expect;

describe('salvarMatriz', function(){
    it('transforma pedaço da id em indices de celula', function() {
        matriz = document.createElement('form');
        matriz.setAttribute("id", "matriz");
        matriz.innerHTML = 
        '<h3>Insira sua matriz:</h3>\
        <table>\
            <tr>\
                <td><input type="number" id="00" min="0" max="1" value="1"></td>\
                <td><input type="number" id="01" min="0" max="1"></td>\
                <td><input type="number" id="02" min="0" max="1"></td>\
            </tr>\
            <tr>\
                <td><input type="number" id="10" min="0" max="1"></td>\
                <td><input type="number" id="11" min="0" max="1" value="1"></td>\
                <td><input type="number" id="12" min="0" max="1"></td>\
            </tr>\
            <tr>\
                <td><input type="number" id="20" min="0" max="1" value="1"></td>\
                <td><input type="number" id="21" min="0" max="1"></td>\
                <td><input type="number" id="22" min="0" max="1" value="1"></td>\
            </tr>\
        </table>\
        <input type="button" value="Salvar Matriz" onclick="salvarMatriz(matrizHTML)"> '

        sinon.stub(document, 'getElementById');
        document.getElementById.withArgs('matriz').returns(matriz);
        salvarMatriz(matriz);
        expect(x).to.be.a('number');
        expect(y).to.be.a('number');
    })
});

describe('contarVizinhos', function(){
    it('conta vizinhos em todas as direções', function() {
        salvarMatriz(matriz);
        contagemTeste = contarVizinhos(1,1);
        expect(contagemTeste).to.equal(3)
    })
})

describe('checarVida', function(){
    beforeEach(function(){
        div = document.createElement('div');
        div.setAttribute("id", "resultado");
        document.getElementById.withArgs('resultado').returns(div);
    })
    it('verifica se continua viva', function() {
        checarVida(1,1);
        expect(celulaTeste).to.equal(1);
        expect(vizinhos).to.be.oneOf([2,3]);
    })
    it('verifica se morta por baixa população', function() {
        checarVida(2,2);
        expect(celulaTeste).to.equal(1);
        expect(vizinhos).to.be.below(2);
    })
    it('verifica se continua morta', function() {
        checarVida(0,1);
        expect(celulaTeste).to.equal(0);
        expect(vizinhos).to.be.not.equal(3);;
        
    })
    it('verifica se revive', function() {
        checarVida(2,1);
        expect(celulaTeste).to.equal(0);
        expect(vizinhos).to.be.at.least(3);
    })
})
