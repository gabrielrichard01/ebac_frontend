const alunos = [
    {nome: 'Gabriel', nota: 7},
    {nome: 'Ronaldo', nota: 5},
    {nome: 'Ana', nota: 8},
    {nome: 'Maria', nota: 6}
];

function exibeAlunosAprovados(alunos){
    return alunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = exibeAlunosAprovados(alunos);
console.log(alunosAprovados);