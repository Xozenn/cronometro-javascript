function relogio() {
  function criaHoraSegundos(segundo) {
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  };

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerText = criaHoraSegundos(segundos);
    }, 1000);
  };

  document.addEventListener('click', function (e) {
    const elemento = e.target;
    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
    if (elemento.classList.contains('parar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
    if (elemento.classList.contains('resetar')) {
      clearInterval(timer);
      relogio.innerText = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  });
}
relogio();