var expect = chai.expect;

describe('contarVizinhos', function(){
    it('conta vizinhos em todas as direções', function() {
        var valoresCelulaTeste = [1, 0, 0, 0, 1, 0, 1, 0, 1];
        criarMatrizCelular(valoresCelulaTeste);
        contagemTeste = contarVizinhos(1,1);
        expect(contagemTeste).to.equal(3)
    })
})

describe('checarVida', function(){
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
