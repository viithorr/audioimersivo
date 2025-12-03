document.addEventListener("DOMContentLoaded", () => {

    // === Seletores ===
    const playBtn = document.getElementById("btnPlayPause");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const currentTimeEl = document.getElementById("currentTime");
    const totalTimeEl = document.getElementById("totalTime");
    const waveformContainer = document.getElementById("waveform");

    // === Inicializa Wavesurfer ===
    const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        waveColor: "#FFA844",   // parte futura
        progressColor: "#0E6430", // parte já tocada
        barWidth: 3,
        barGap: 2,
        height: 60,
        responsive: true,
        cursorWidth: 0,
    });

    // Carrega o áudio da página 1
   wavesurfer.load('audios/pagina01.mp3');


    // Atualiza duração quando carregar
    wavesurfer.on("ready", () => {
        const duration = wavesurfer.getDuration();
        totalTimeEl.textContent = formatTime(duration);
    });

    // Atualiza progresso em tempo real
    wavesurfer.on("audioprocess", () => {
        const current = wavesurfer.getCurrentTime();
        currentTimeEl.textContent = formatTime(current);
    });


    // Função Play/Pause
playBtn.addEventListener("click", () => {

    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
    } else {
        wavesurfer.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }
});


    // Formata segundos → 0:00
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

});
