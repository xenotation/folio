document.addEventListener('DOMContentLoaded', function () {
    function playRandomVideoOrImage(videoContainer, videoFiles, imageFiles) {
        if (isMobileDevice()) {
            // If user is on a mobile device, display a random image
            var randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
            var img = document.createElement('img');
            img.src = '/images/' + randomImage;
            img.alt = 'Random Image';
            img.classList.add('video-container');
            videoContainer.innerHTML = '';
            videoContainer.appendChild(img);
        } else {
            // If not on a mobile device, play a random video
            var randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
            var videoElement = document.createElement('video');
            videoElement.src = '/images/' + randomVideo;
            videoElement.autoplay = true;
            videoElement.muted = true;
            videoElement.classList.add('video-container');
            videoContainer.innerHTML = '';
            videoContainer.appendChild(videoElement);
            videoElement.play();
        }
    }

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    var videoContainers = document.getElementsByClassName('video-container');
    var videoFiles = ['Turing-Pattern-1.webm', 'Turing-Pattern-2.webm', 'Turing-Pattern-3.webm', 'Turing-Pattern-4.webm', 'Turing-Pattern-5.webm', 'Turing-Pattern-6.webm'];
    var imageFiles = ['Turing-Pattern-1.webp'];

    Array.from(videoContainers).forEach(function (videoContainer) {
        playRandomVideoOrImage(videoContainer, videoFiles, imageFiles);

        videoContainer.addEventListener('click', function () {
            playRandomVideoOrImage(videoContainer, videoFiles, imageFiles);
        });
    });
});
