document.addEventListener('DOMContentLoaded', function () {
    function playRandomVideo(videoElement, videoFiles) {
        // Get a random video filename
        var randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];

        // Set the new video source
        videoElement.src = '/images/' + randomVideo;

        // Preload the next video
        preloadNextVideo(videoElement, videoFiles);

        // Play the video
        videoElement.play();
    }

    function preloadNextVideo(videoElement, videoFiles) {
        // Get a random video filename for preloading
        var randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];

        // Create a new video element for preloading
        var nextVideoElement = document.createElement('video');
        nextVideoElement.src = '/images/' + randomVideo;
        nextVideoElement.preload = 'auto';

        // Remove the next video element after preloading (optional)
        nextVideoElement.addEventListener('loadeddata', function () {
            nextVideoElement.remove();
        });

        // Append the next video element to the document body for preloading
        document.body.appendChild(nextVideoElement);
    }

    // Get all elements with the 'video-container' class
    var videoContainers = document.getElementsByClassName('video-container');

    // List of video filenames in the 'videos' folder
    var videoFiles = ['Turing-Pattern-1.webm', 'Turing-Pattern-2.webm', 'Turing-Pattern-3.webm', 'Turing-Pattern-4.webm', 'Turing-Pattern-5.webm', 'Turing-Pattern-6.webm', 'Turing-Pattern-7.webm', 'Turing-Pattern-8.webm', 'Turing-Pattern-9.webm'];

    // Loop through each container
    Array.from(videoContainers).forEach(function (videoContainer) {
        // Create a video element and set its attributes
        var videoElement = document.createElement('video');
        videoElement.autoplay = true;
        videoElement.muted = true;

        // Append the video element to the container
        videoContainer.appendChild(videoElement);

        // Play the initial random video
        playRandomVideo(videoElement, videoFiles);

        // Listen for the 'ended' event to play another random video
        videoElement.addEventListener('ended', function () {
            playRandomVideo(videoElement, videoFiles);
        });
    });
});
