// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const navUl = document.querySelector('.nav-container ul');

//     if (menuToggle && navUl) {
//         menuToggle.addEventListener('click', function() {
//             navUl.classList.toggle('active');
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');

    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const faqResposta = faqItem.querySelector('.faq-resposta');
            faqResposta.classList.toggle('ativo');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    function toggleMobileMenu() {
        navLinks.classList.toggle('open'); 

    }
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
      alert("⚠️ Por favor, preencha todos os campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("⚠️ Por favor, insira um e-mail válido.");
      return;
    }

    alert("✅ Mensagem enviada com sucesso!");
    form.reset();
  });
});

