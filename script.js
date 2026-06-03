// Efeito de Surgir ao Rolar a Página (Scroll Animation)
const cards = document.querySelectorAll('.animate-scroll');

const checkCards = () => {
    // Define o ponto da tela onde a animação deve disparar (80% da altura da tela)
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show'); // Ativa a animação do CSS
        }
    });
};

// Executa a função ao rolar a página e logo quando abre o site
window.addEventListener('scroll', checkCards);
window. someText = checkCards();
