// Botões de leitura
document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            this.textContent = "Ler mais";
        } else {
            content.style.display = "block";
            this.textContent = "Ocultar";
        }
    });
});

// Formulário
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
});