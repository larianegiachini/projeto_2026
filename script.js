// Scroll Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Formulário
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
});