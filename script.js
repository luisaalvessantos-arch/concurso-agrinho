// ==================== ANIMAÇÃO DE SCROLL ====================
const cards = document.querySelectorAll('.animate-scroll');

const checkCards = () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
};

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);

// ==================== LÓGICA DO QUIZ ====================
function checkAnswer(isCorrect, buttonClicked) {
    const options = buttonClicked.parentElement.querySelectorAll('.quiz-btn');
    const feedback = document.getElementById('quiz-feedback');

    options.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        buttonClicked.classList.add('correct');
        feedback.style.color = '#00ff66';
        feedback.innerText = '💥 Mandou bem! Drones e IA são o futuro da precisão no campo!';
    } else {
        buttonClicked.classList.add('wrong');
        feedback.style.color = '#ff0055';
        feedback.innerText = '❌ Quase lá! A resposta certa era a tecnologia de monitoramento aéreo (B).';
        
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

    if (username === '' || commentText === '') {
        alert('Ei, preenche o seu @ e digite sua mensagem antes de enviar! 😉');
        return;
    }

    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');

    // Garante que o nome comece com @ para parecer rede social
    const formattedUser = username.startsWith('@') ? username : '@' + username;

    newComment.innerHTML = `
        <div class="comment-avatar"><i class="fas fa-user"></i></div>
        <div class="comment-content">
            <h4>${formattedUser}</h4>
            <p>${commentText}</p>
        </div>
    `;

    // Insere o novo comentário no topo da lista
    commentsList.insertBefore(newComment, commentsList.firstChild);

    // Reseta os campos
    usernameInput.value = '';
    commentTextInput.value = '';
}
