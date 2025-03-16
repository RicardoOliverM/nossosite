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
setInterval(atualizarTempo, 1000);

atualizarTempo();
