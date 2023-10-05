function multiplicacao(a: number, b:number): number{
    return a * b
}

function dizOla(nome: string): string{
    return `Olá, ${nome}`
}

const resultadoMultiplicacao = multiplicacao(10,5);
const mensagem = dizOla("Gabriel");

console.log("Resultado da Multiplicação é", resultadoMultiplicacao);
console.log(mensagem);