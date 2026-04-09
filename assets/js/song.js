const audio = document.getElementById("background-music");
const toggleBtn = document.getElementById("music-toggle");
const icon = toggleBtn.querySelector("i");

audio.volume = 0.3; // 30% volume for a calming effect

toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().then(() => {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
        }).catch(err => console.log("Playback failed:", err));
    } else {
        audio.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});