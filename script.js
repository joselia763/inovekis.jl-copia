// =========================
// MENU MOBILE
// =========================

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}


// =========================
// FORMULÁRIO ORÇAMENTO
// =========================

const botao = document.getElementById("btn-orcamento");

if (botao) {

    botao.addEventListener("click", function () {

        const inputs = document.querySelectorAll(".formulario-contato input");
        const selectHorario = document.querySelector(".formulario-contato select");
        const textarea = document.querySelector(".formulario-contato textarea");

        let responsavel = inputs[0].value.trim();
        let telefone = inputs[1].value.trim();
        let crianca = inputs[2].value.trim();
        let escola = inputs[3].value.trim();
        let endereco = inputs[4].value.trim();
        let horario = selectHorario.value;
        let observacao = textarea.value.trim();

        if (
            responsavel === "" ||
            telefone === "" ||
            crianca === "" ||
            escola === "" ||
            endereco === "" ||
            horario === ""
        ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        let mensagem =
            "Olá, gostaria de solicitar um orçamento.\n\n" +
            "Nome do responsável: " + responsavel + "\n" +
            "Telefone: " + telefone + "\n" +
            "Nome da criança: " + crianca + "\n" +
            "Escola: " + escola + "\n" +
            "Endereço do ponto de partida: " + endereco + "\n" +
            "Horário: " + horario + "\n" +
            "Observações: " + observacao;

        let mensagemCodificada = encodeURIComponent(mensagem);

        window.open(
            "https://wa.me/5561995657726?text=" + mensagemCodificada,
            "_blank"
        );

    });

}
