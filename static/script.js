// Apenas o código de animação dos confetes permanece no script.js
function estourarConfete() {
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.7 }
        });
    }, 500);
}
