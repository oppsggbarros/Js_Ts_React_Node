import { Pessoa } from "./Pessoa";
export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }
    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de deposito deve ser positivo.");
        this.saldo += valor;
    }
    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }
    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }
}

export class Poupanca extends Conta {
    private taxaRendimento: number;


    constructor(titular: Pessoa, saldo: number, taxaRedimento: number) {
        super(titular, saldo);
        this.taxaRendimento = taxaRedimento;
    }
    public aplicaRendimento(): void {
        this.saldo += this.saldo * this.taxaRendimento / 100;
    }
    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Taxa de Rendimento: ${this.taxaRendimento}%`;
    }
}
export class Corrente extends Conta{
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public override sacar(valor: number): void{
        if (valor > this.saldo + this.limiteChequeEspecial) throw new Error("Valor de saque excede o limite do cheque especial.");
        
        this.saldo -= valor;
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Limite do Cheque Especial: ${this.limiteChequeEspecial}`;
    }
}