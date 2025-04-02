function Jogador(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.chutar = function() {
        console.log(this.nome + ' está chutando a bola.');
    }
}
function Time (nome, qtd) {
    this.nome = nome;
    this.qtd = qtd;
    this.jogadores = [];
    this.addJogador = function(jogador) {
        this.jogadores.push(jogador);
    }
}
function compare (obj1, obj2) {
    if (obj1.idade > obj2.idade) {
        return -1;
    }
    
}