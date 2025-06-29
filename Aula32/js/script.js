let pessoa = {
    nome: 'Matheus',
    idade: 20,
    profissao: 'Programador',
    falar: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    },
    soma: function(a, b) {
        return a + b;
    },
}