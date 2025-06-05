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