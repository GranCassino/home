function toggleDescription() {
    const shortDesc = document.getElementById("shortDesc");
    const fullDesc = document.getElementById("fullDesc");
    const btn = document.getElementById("readMoreBtn");
    
    if (fullDesc.style.display === "none") {
        shortDesc.style.display = "none";
        fullDesc.style.display = "inline";
        btn.innerText = "Ver menos";
    } else {
        shortDesc.style.display = "inline";
        fullDesc.style.display = "none";
        btn.innerText = "Ver mais";
    }
}

function toggleFullScreen() {
    const wrapper = document.getElementById("gameWrapper");

    // Se já estiver em tela cheia (pela API do navegador), sai da tela cheia
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        wrapper.classList.remove("absolute-fullscreen");
    } else {
        // Ativa o Full Screen absoluto em todo o documento/janela
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        wrapper.classList.add("absolute-fullscreen");
    }
}

// Ouve eventos de mudança de tela cheia (caso o usuário aperte ESC, por exemplo)
document.addEventListener("fullscreenchange", () => {
    const wrapper = document.getElementById("gameWrapper");
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        wrapper.classList.remove("absolute-fullscreen");
    }
});

document.addEventListener("webkitfullscreenchange", () => {
    const wrapper = document.getElementById("gameWrapper");
    if (!document.webkitFullscreenElement) {
        wrapper.classList.remove("absolute-fullscreen");
    }
});