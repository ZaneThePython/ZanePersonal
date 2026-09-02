(function () {
    var music = document.getElementById("bg-music");
    if (!music) return;

    if (window.parent === window) {
        function tryPlayMusic() {
            if (music && music.paused) {
                music.play().catch(function () {});
            }
        }

        window.addEventListener("click", tryPlayMusic, { once: true });
        return;
    }

    var syncing = false;

    music.volume = 0;
    music.removeAttribute("autoplay");
    music.pause();

    music.addEventListener("play", function () {
        if (syncing) return;
        window.parent.postMessage({ type: "music-play" }, "*");
    });

    music.addEventListener("pause", function () {
        if (syncing) return;
        window.parent.postMessage({ type: "music-pause" }, "*");
    });

    music.addEventListener("seeked", function () {
        if (syncing) return;
        window.parent.postMessage({ type: "music-seek", time: music.currentTime }, "*");
    });

    window.addEventListener("message", function (e) {
        if (e.source !== window.parent) return;

        var data = e.data;
        if (!data || data.type !== "music-sync") return;

        syncing = true;

        if (Math.abs(music.currentTime - data.currentTime) > 0.3) {
            music.currentTime = data.currentTime;
        }

        if (data.paused) {
            music.pause();
        } else {
            music.play().catch(function () {});
        }

        syncing = false;
    });

    window.parent.postMessage({ type: "music-frame-ready" }, "*");
})();
