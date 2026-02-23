// =========================
// BOTÕES
// =========================

function abrirCalculadora() {
    window.open("https://www.calculadoraonline.com.br/basica", "_blank");
}

function abrirInstagram() {
    window.open("https://www.instagram.com/larigiachini", "_blank");
}

function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/lariane-giachini-bachega-bb441a232/", "_blank");
}

function abrirFacebook() {
    window.open("https://www.facebook.com/larigiachini/", "_blank");
}

// =========================
// RELÓGIO BRASÍLIA
// =========================

function atualizarRelogio() {
    const agora = new Date();
    const opcoes = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    const horario = new Intl.DateTimeFormat("pt-BR", opcoes).format(agora);
    document.getElementById("clock").innerText = "Horário Brasília: " + horario;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// =========================
// COTAÇÃO DÓLAR E EURO (VERSÃO CORRIGIDA)
// =========================

async function buscarCotacao() {
    try {
        const resposta = await fetch("https://open.er-api.com/v6/latest/BRL");
        const dados = await resposta.json();

        const dolar = (1 / dados.rates.USD).toFixed(2);
        const euro = (1 / dados.rates.EUR).toFixed(2);

        document.getElementById("currency").innerText =
            "Dólar: R$ " + dolar + " | Euro: R$ " + euro;

    } catch (erro) {
        document.getElementById("currency").innerText =
            "Erro ao buscar cotação";
        console.error("Erro:", erro);
    }
}

buscarCotacao();
setInterval(buscarCotacao, 60000);