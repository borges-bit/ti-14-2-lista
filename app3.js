let maquina1 = parseInt(prompt("Peças produzidas pela Máquina 1:"));
let maquina2 = parseInt(prompt("Peças produzidas pela Máquina 2:"));

if (maquina1 > maquina2) {
alert("Máquina 1 produziu mais.");
} else if (maquina2 > maquina1) {
alert("Máquina 2 produziu mais.");
}else
alert("Empate na produção.");