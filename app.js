let nota = parseFloat(prompt("Digite a nota final do aluno:"));

        if (nota >= 7) {
            alert("Nota: " + nota + "\nSituação: Aprovado");
        } else if (nota >= 5) {
            alert("Nota: " + nota + "\nSituação: Recuperação");
        } else {
            alert("Nota: " + nota + "\nSituação: Reprovado");
        }
