function atualizarTempo(){
    const inicioNamoro = new Date(2021, 9, 9, 9, 9, 9);
    const agora = new Date();
    
    let diff = agora - inicioNamoro;

    const segundos = Math.floor((diff / 1000) % 60);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const horas = Math.floor((diff / 1000 / 60 / 60) % 24);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias/ 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = (dias % 365) % 30;

    const formatado = `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horas}h, ${minutos}m, ${segundos}s`;

    document.getElementById("contador").innerText = formatado;
}

function verificarData(){
    let hoje = new Date();
    let dia = hoje.getDate();

    if (true){
        estourarConfete();
    }
}

function estourarConfete(){
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.7 }
    });
}, 500);
}
window.onload = verificarData;

setInterval(atualizarTempo, 1000);

atualizarTempo();
