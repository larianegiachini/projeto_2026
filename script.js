/* =====================================================
   BACHEGA - SCRIPT PROFISSIONAL
   Desenvolvido com padrão SaaS moderno
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       1. HEADER DINÂMICO AO ROLAR
    ========================================== */
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    /* ==========================================
       2. SCROLL SUAVE ENTRE SEÇÕES
    ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* ==========================================
       3. ANIMAÇÃO AO ENTRAR NA TELA
    ========================================== */
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    /* ==========================================
       4. EFEITO RIPPLE NOS BOTÕES
    ========================================== */
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            const circle = document.createElement("span");
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
            circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];
            if (ripple) {
                ripple.remove();
            }

            this.appendChild(circle);
        });
    });

    /* ==========================================
       5. ANIMAÇÃO NOS CARDS
    ========================================== */
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
        });
    });

    /* ==========================================
       6. BOTÃO WHATSAPP COM PULSO SUAVE
    ========================================== */
    const whatsappBtn = document.querySelector(".whatsapp-float");

    setInterval(() => {
        whatsappBtn.classList.add("pulse");
        setTimeout(() => {
            whatsappBtn.classList.remove("pulse");
        }, 1000);
    }, 5000);

});