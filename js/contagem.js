function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  }

  // Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
    const h5Elemento = document.getElementById('contador');
    let tempoRestante = 24 * 60 * 60; // 1 dia em segundos

    function atualizarContador() {
      h5Elemento.textContent = formatarTempo(tempoRestante);

      if (tempoRestante <= 0) {
        clearInterval(contadorInterval);
        h5Elemento.textContent = 'Fim da promoção';
      } else {
        tempoRestante--;
      }
    }

    // Iniciar a contagem regressiva a cada segundo
    const contadorInterval = setInterval(atualizarContador, 1000);
}

// Iniciar a contagem regressiva quando a página carregar
window.onload = iniciarContagemRegressiva;