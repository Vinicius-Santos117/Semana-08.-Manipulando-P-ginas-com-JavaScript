class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

var alunos = [
    new Aluno("Layla", "Santos", 7, 8.5),
    new Aluno("Vinicius", "Santos", 5, 6.5),
    new Aluno("Ronaldo", "Souza", 8, 9),
    new Aluno("Ana", "Pereira", 4, 5),
    new Aluno("Pedro", "Costa", 6, 7)
];


function mostrarDadosAlunos() {
    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];
        alert(
            "Aluno: " + aluno.nomeCompleto() + "\n" +
            "Média: " + aluno.media().toFixed(2) + "\n" +
            "Situação: " + aluno.situacao()
        );
    }
}

mostrarDadosAlunos();