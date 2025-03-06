function calcularMedia() {
    let nomeDoAluno = document.getElementById('nomeDoAluno').value;
    let disciplina = document.getElementById('materia').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let media = (nota1 + nota2 + nota3) / 3;

    let resultadoElement = document.getElementById('resultado');
    let resultado;
    if (media >= 6) {
        resultado = `Parabéns, ${nomeDoAluno}! Você foi <span class="aprovado">aprovado</span> na disciplina de ${disciplina} com média ${media.toFixed(2)}.`;
        resultadoElement.className = 'aprovado';
    } else {
        resultado = `Infelizmente, ${nomeDoAluno}, você foi <span class="reprovado">reprovado</span> na disciplina de ${disciplina} com média ${media.toFixed(2)}.`;
        resultadoElement.className = 'reprovado';
    }

    resultadoElement.innerHTML = resultado;
}

// Adiciona funcionalidade para navegação com a tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.formulario input, .formulario select');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    calcularMedia();
                }
            }
        });
    });
});