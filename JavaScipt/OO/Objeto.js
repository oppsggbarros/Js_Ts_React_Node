let carro = {
    marca : "Fiat",
    modelo : "Fiorino",
    ano : 2015,
    PaisdeOrigem: {
        pais : "Brasil",
        cidade : "São Paulo"
    },
    ligar: function() {
        console.log("Ligando o carro")
    }
}
console.log(carro);
console.log(carro.toString());
console.log(bool.ligar());
carro.ligar();

carro.marca = "Ford";
carro.modelo = "Ka";
console.log(carro);

delete carro.ano;
console.log(carro);

console.log('marca' in carro);
console.log('ano' in carro);

console.log('')