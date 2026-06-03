// ==================== LÓGICA DO QUIZ ====================
function checkAnswer(isCorrect, buttonClicked) {
    const options = buttonClicked.parentElement.querySelectorAll('.quiz-btn');
    const feedback = document.getElementById('quiz-feedback');

    // Desativa todos os botões após o clique para o usuário não clicar duas vezes
    options.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        buttonClicked.classList.add('correct');
        feedback.style.color = '#00ff66';
        feedback.innerText = '💥 Mandou bem! Drones e IA estão revolucionando a precisão no campo!';
    } else {
        buttonClicked.classList.add('wrong');
        feedback.style.color = '#ff0055';
        feedback.innerText = '❌ Quase lá! Tente dar uma olhada nas tecnologias de monitoramento aéreo.';
        
        // Destaca a alternativa correta mesmo se errou
        options.forEach(btn => {
            if (btn.innerText.includes('B)')) {
                btn.classList.add('correct');
            }
        });
    }
}

// ==================== LÓGICA DOS COMENTÁRIOS ====================
function addComment() {
    const usernameInput = document.getElementById('username');
    const commentTextInput = document.getElementById('comment-text');
    const commentsList = document.getElementById('comments-list');

    const username = usernameInput.value.trim();
    const commentText = commentTextInput.value.trim();

    // Validação simples para não enviar vazio
    if (username === '' || commentText === '') {
        alert('Ei, preenche o seu @ e a sua mensagem! 😉');
        return;
    }

    // Cria a estrutura do novo comentário
    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');

    newComment.innerHTML = `
        <div class="comment-avatar"><i class="fas fa-user"></i></div>
        <div class="comment-content">
            <h4>${username.startsWith('@') ? username : '@' + username}</h4>
            <p>${commentText}</p>
        </div>
    `;

    // Adiciona o comentário no topo da lista
    commentsList.insertBefore(newComment, commentsList.firstChild);

    // Limpa os campos do formulário
    usernameInput.value = '';
    commentTextInput.value = '';
}

// ==================== ANIMAÇÃO DE SCROLL (MANTER) ====================
const cards = document.querySelectorAll('.animate-scroll');
const checkCards = () => {
    const triggerBottom = window.innerHeight * 0.8;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
};
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);
