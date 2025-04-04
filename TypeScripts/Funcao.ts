type Funcao = (a: number, b: number) => number;

function soma (a: number, b: number): number {
    return a + b;
}

const somaArrow: Funcao = (a, b) => a + b;

const somaAnonima : Funcao = function (a, b) {
    return a + b;
}

const somaRetornoImplicito : Funcao = (a, b) => a + b;
function somaComParametroOpcionais(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}