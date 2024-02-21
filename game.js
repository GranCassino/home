if(document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

	const styleEl = document.createElement('link');
	styleEl.setAttribute('rel', 'stylesheet');
	styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
	styleEl.addEventListener('load', function() {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);
	
	toggleBtn.addEventListener('click', function() {
		if(document.fullscreen) {
			document.exitFullscreen();
		} else if(document.webkitFullscreenElement) {
			document.webkitCancelFullScreen()
		} else if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});
	
	document.addEventListener('fullscreenchange', handleFullscreen);
	document.addEventListener('webkitfullscreenchange', handleFullscreen);
	
	
	function handleFullscreen() {
		if(document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add('on');
			toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
		} else {
			toggleBtn.classList.remove('on');
			toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
		}
	}
}

// Função para atualizar o relógio a cada segundo
    function atualizarRelogio() {
      var data = new Date();
      var horas = data.getHours().toString().padStart(2, '0');
      var minutos = data.getMinutes().toString().padStart(2, '0');
      var segundos = data.getSeconds().toString().padStart(2, '0');

      var relogioElemento = document.getElementById("relogio");
      relogioElemento.textContent = `${horas}:${minutos}`;
    }

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    // Atualiza o relógio imediatamente ao carregar a página
    atualizarRelogio();
