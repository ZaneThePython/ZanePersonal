(function () {
    const music = document.getElementById("bg-music");
    const iframe = document.getElementById("site-viewport");
    if (!music) return;

    const KEYS = {
        enabled: "musicEnabled",
        userPaused: "musicUserPaused",
    };

    var hasBeenPlaying = false;
    var lastSync = 0;

    function isEnabled() {
        return sessionStorage.getItem(KEYS.enabled) === "true";
    }

    function isUserPaused() {
        return sessionStorage.getItem(KEYS.userPaused) === "true";
    }

    function tryPlay() {
        if (isEnabled() && !isUserPaused()) {
            music.play().catch(function () {});
        }
    }

    function syncToFrame() {
        if (!iframe || !iframe.contentWindow) return;

        iframe.contentWindow.postMessage(
            {
                type: "music-sync",
                currentTime: music.currentTime,
                paused: music.paused,
            },
            "*"
        );
    }

    function hidePopup(overlay) {
        overlay.classList.add("music-permission-hidden");
    }

    function showPopup() {
        if (isEnabled()) return;
        if (document.querySelector(".music-permission-overlay")) return;

        const overlay = document.createElement("div");
        overlay.className = "music-permission-overlay";

        const windowEl = document.createElement("div");
        windowEl.className = "music-permission-window";

        const titlebar = document.createElement("div");
        titlebar.className = "music-permission-titlebar";

        const logo = document.createElement("img");
        logo.className = "music-permission-logo";
        logo.src = "logo.gif";
        logo.alt = "logo";

        const box = document.createElement("div");
        box.className = "music-permission-box content";

        const text = document.createElement("p");
        text.textContent =
            "Zane.org needs certain permissions to work as intended. Click button to continue?";

        const button = document.createElement("a");
        button.href = "#";
        button.className = "music-permission-button";
        button.textContent = "Continue";

        button.addEventListener("click", function (e) {
            e.preventDefault();
            sessionStorage.setItem(KEYS.enabled, "true");
            sessionStorage.setItem(KEYS.userPaused, "false");
            hidePopup(overlay);
            music.play().catch(function () {});
            syncToFrame();
        });

        titlebar.appendChild(logo);
        box.appendChild(text);
        box.appendChild(button);
        windowEl.appendChild(titlebar);
        windowEl.appendChild(box);
        overlay.appendChild(windowEl);
        document.body.appendChild(overlay);
    }

    music.addEventListener("playing", function () {
        hasBeenPlaying = true;
    });

    music.addEventListener("play", function () {
        sessionStorage.setItem(KEYS.userPaused, "false");
        syncToFrame();
    });

    music.addEventListener("pause", function () {
        if (hasBeenPlaying) {
            sessionStorage.setItem(KEYS.userPaused, "true");
        }
        syncToFrame();
    });

    music.addEventListener("seeked", syncToFrame);

    music.addEventListener("timeupdate", function () {
        var now = Date.now();
        if (now - lastSync >= 500) {
            lastSync = now;
            syncToFrame();
        }
    });

    music.addEventListener("canplay", tryPlay);

    window.addEventListener("message", function (e) {
        if (!iframe || e.source !== iframe.contentWindow) return;

        var data = e.data;
        if (!data || !data.type) return;

        if (data.type === "music-play") {
            sessionStorage.setItem(KEYS.userPaused, "false");
            music.play().catch(function () {});
        } else if (data.type === "music-pause") {
            music.pause();
        } else if (data.type === "music-seek") {
            music.currentTime = data.time;
        } else if (data.type === "music-frame-ready") {
            syncToFrame();
            tryPlay();
        }
    });

    if (iframe) {
        iframe.addEventListener("load", function () {
            syncToFrame();
            tryPlay();
        });
    }

    showPopup();
})();
