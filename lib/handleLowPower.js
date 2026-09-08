let listenersAttached = false

export default function handlelowPower () {
    if (typeof window === 'undefined' || typeof HTMLMediaElement === 'undefined') {
        return
    }

    // Only define once — React Strict Mode double-invokes effects; redefining
    // a non-configurable property throws and blank-screens the app.
    if (!Object.prototype.hasOwnProperty.call(HTMLMediaElement.prototype, 'playing')) {
        Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
            configurable: true,
            get: function () {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
            }
        });
    }

    const videoElement = document.getElementById('bg-video');
    const imageElement = document.getElementById('bg-img');
    if (!videoElement || !imageElement) {
        return
    }

    // Avoid duplicate listeners under Strict Mode remounts.
    if (listenersAttached) {
        return
    }
    listenersAttached = true

    videoElement.addEventListener('suspend', () => {
        if (!videoElement.playing) {
            imageElement.style.display = 'block'
            videoElement.style.display = 'none'
        }
    });

    videoElement.addEventListener('play', () => {
        imageElement.style.display = 'none'
        videoElement.style.display = 'block'
    });

    const tryPlay = () => {
        if (!videoElement.playing) {
            videoElement.play().catch(() => {})
        }
    }

    const body = document.body
    if (body) {
        body.addEventListener('click', tryPlay)
        body.addEventListener('touchstart', tryPlay, { passive: true })
    }
}
