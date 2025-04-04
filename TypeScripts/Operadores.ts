let a: number = 10;

let b: number = 20;
let totalSoma: number = a + b;
let totalSubtracao: number = a - b;
let totalMultiplicacao: number = a * b;
let totalDivisao: number = a / b;
let totalResto: number = a % b;

console.log(`Soma: ${totalSoma} + Subtração: ${totalSubtracao} + Multiplicação: ${totalMultiplicacao} + Divisão: ${totalDivisao} + Resto: ${totalResto}`);

let nome : string = "João";
let sobrenome: string = "Silva";
let textoConcatenado : string = nome + sobrenome;
console.log(`Nome Completo : ${textoConcatenado}`);
let TextoRepetido : string = nome.repeat(3);
console.log(`Texto Repetido: ${TextoRepetido}`);

let comparacao: boolean = a == b;
let comparacao2: boolean = a != b;
let comparacao3: boolean = a === b;
let comparacao4: boolean = a !== b;
console.log(`Comparação 1: ${comparacao} + Comparação 2: ${ comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

let comparacao5 : boolean = a > 0 && b > 0;
let comparacao6 : boolean = a > 0 || b > 0;
let comparacao7 : boolean = !(a > 0);
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

let resultado: string = a > b ? "A é maior que B" : "A é menor que B";
console.log(`Resultado: ${resultado}`);

let valor: number = 10;
valor += 5;
valor -= 5;
valor *= 5;
valor /= 5;
valor %= 5;
console.log(`Valor: ${valor}`);

let contador: number = 0;
contador++;
contador--;
console.log(`Contador: ${contador}`);


let valorNulo: number | null = 10;
let valorDefault: number = valorNulo ?? 11;
console.log(`Valor Nulo: ${valorNulo} + Valor Default: ${valorDefault}`);

let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6, 7, 8];
console.log(`Numeros: ${numeros} + Novos Numeros: ${novosNumeros}`);

let pessoa: {nome: string, idade: number} = {nome: "João", idade: 30};
let { nome: NomePessoa, idade: idadePessoa } = pessoa;
console.log(`Nome: ${NomePessoa}, Idade: ${idadePessoa}`);

let objeto : {nome: string, idade: number} = {nome: "João", idade: 30};
let resultados: { [key: string]: number } = { 
    soma: totalSoma,
    subtracao: totalSubtracao,
    multiplicacao: totalMultiplicacao,
    divisao: totalDivisao,
    resto: totalResto,
}
console.log(resultados["soma"]);
let resultado2 : { [key: string]: any } = {
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123,
    },
}
