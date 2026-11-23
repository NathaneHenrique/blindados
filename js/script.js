const botoes = document.querySelectorAll(".btn-detalhes");
const modal = new bootstrap.Modal(document.getElementById("modalCarro"));

function abrirDetalhes(evento) {
    const botao = evento.currentTarget;
    document.getElementById("modalTitulo").textContent = botao.dataset.modelo;
    console.log(botao.dataset.modelo);
    document.getElementById("modalDescricao").textContent = botao.dataset.descricao;
    document.getElementById("modalAutonomia").textContent = botao.dataset.autonomia;
    document.getElementById("modalBlindagem").textContent = botao.dataset.blindagem;
    const imagem = document.getElementById("modalImagem");
    imagem.src = botao.dataset.imagem;
    imagem.alt = botao.dataset.modelo;
    const autonomia = parseInt(botao.dataset.autonomia);
    if (autonomia >= 450) {
        document.getElementById("modalSelo").textContent = "Longo alcance";
    } else {
        document.getElementById("modalSelo").textContent = "";
    }

    modal.show();
}

botoes.forEach(function (botao) {
    botao.addEventListener("click", abrirDetalhes);
});

const formulario = document.getElementById("formContato");
const mensagemForm = document.getElementById("mensagemForm");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    if (nome === "") {
        mensagemForm.className = "erro";
        mensagemForm.textContent = "Por favor, preencha o seu nome.";
        return;
    }
    if (email === "") {
        mensagemForm.className = "erro";
        mensagemForm.textContent = "Por favor, preencha o seu e-mail.";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        mensagemForm.className = "erro";
        mensagemForm.textContent = "Digite um e-mail válido.";
        return;
    }
    if (mensagem === "") {
        mensagemForm.className = "erro";
        mensagemForm.textContent = "Por favor, preencha a mensagem.";
        return;
    }
    mensagemForm.className = "sucesso";
    mensagemForm.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
    formulario.reset();

});
