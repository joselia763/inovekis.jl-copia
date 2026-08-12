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
        const textarea = document.querySelector(".formulario-contato textarea");

        let responsavel = inputs[0].value.trim();
        let telefone = inputs[1].value.trim();
        let crianca = inputs[2].value.trim();
        let escola = inputs[3].value.trim();
        let endereco = inputs[4].value.trim();
        let observacao = textarea.value.trim();

        if (
            responsavel === "" ||
            telefone === "" ||
            crianca === "" ||
            escola === "" ||
            endereco === "" ||
            observacao === ""
        ) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        let mensagem =
            "Olá, gostaria de solicitar um orçamento.%0A%0A" +
            "Nome do responsável: " + responsavel + "%0A" +
            "Telefone: " + telefone + "%0A" +
            "Nome da criança: " + crianca + "%0A" +
            "Escola: " + escola + "%0A" +
            "Bairro/Endereço: " + endereco + "%0A" +
            "Observações: " + observacao;

        window.open(
            "https://wa.me/5561995657726?text=" + mensagem,
            "_blank"
        );

    });

}