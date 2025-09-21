const playBtn = document.getElementById("playBtn");
    const audio = document.getElementById("audio");
    const volumeControl = document.getElementById("volume");

    let isPlaying = false;

    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        playBtn.textContent = "⏸ Pause";
        isPlaying = true;
      } else {
        audio.pause();
        playBtn.textContent = "▶ Play";
        isPlaying = false;
      }
    });

    volumeControl.addEventListener("input", () => {
      audio.volume = volumeControl.value;
    });