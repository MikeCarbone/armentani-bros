export default function handlelowPower () {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    const videoElement = document.getElementById('bg-video');
    const imageElement = document.getElementById('bg-img');
    videoElement.addEventListener('suspend', event => {
        if (!videoElement.playing) {
            imageElement.style.display = 'block'
            videoElement.style.display = 'none'
        }
        // suspend invoked
        // show play button
    });

    videoElement.addEventListener('play', () => {
        // video is played
        // remove play button UI
        // Hide image when video starts to get played
        imageElement.style.display = 'none'
        videoElement.style.display = 'block'
    });

    document.getElementsByTagName('body')[0].addEventListener('click touchstart', function () {
        if (videoElement.playing) {
            // video is already playing so do nothing
        }
        else {
            // video is not playing
            // so play video now
            videoElement.play();
        }
});
}
