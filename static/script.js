
function estourarConfete() {
    setTimeout(() => {
      confetti({
           particleCount: 150,
            spread: 120,
            origin: { y: 0.7 }
        });
    }, 500);
}
function verificarData() {
    let hoje = new Date();
    let dia = hoje.getDate();
    
    // Forçar a condição de "dia 9"
    if (dia === 9 || true) {  // A condição `true` faz com que os confetes sempre estoure
        estourarConfete();
    }
}

