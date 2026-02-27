// EXPANSÃO CLOUD BACKUP
function toggleCloud() {
  const box = document.getElementById("cloudBox");
  box.classList.toggle("active");
}

// EMAILJS CONFIG
(function() {
  emailjs.init("SUA_PUBLIC_KEY_AQUI");
})();

document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
      "SEU_SERVICE_ID",
      "SEU_TEMPLATE_ID",
      this
    ).then(function() {

      document.getElementById("form-status").innerText =
        "Mensagem enviada com sucesso!";

      form.reset();

    }, function(error) {

      document.getElementById("form-status").innerText =
        "Erro ao enviar. Tente novamente.";

    });

  });

});