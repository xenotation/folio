// hero.js

// JavaScript to detect mobile or desktop
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  // On mobile, show only hero image
  var heroImage = document.createElement("img");
  heroImage.src = "{{ with .Resources.GetMatch "hero.webp" }}{{ .Fit "1390x420" | absURL }}{{ end }}";
  heroImage.alt = "{{ $.Page.Params.description | safeHTML }}";
  heroImage.classList.add("featured-image");
  document.querySelector(".hero-container").appendChild(heroImage);
} else {
  // On desktop, look for video hero, if not found, show image
  var videoSource = "{{ with .Resources.GetMatch "hero.webm" }}{{ . | absURL }}{{ end }}";
  if (videoSource) {
    var poster = "{{ $.Resources.GetMatch "hero.webp" | default "" | absURL }}";
    var videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.poster = poster;
    videoElement.classList.add("featured-video");
    var sourceElement = document.createElement("source");
    sourceElement.src = videoSource;
    sourceElement.type = "video/webm";
    videoElement.appendChild(sourceElement);
    document.querySelector(".hero-container").appendChild(videoElement);
  } else {
    // If video not found, show image
    var imageSource = "{{ with .Resources.GetMatch "hero.webp" }}{{ .Fit "1390x420" | absURL }}{{ end }}";
    var imageElement = document.createElement("img");
    imageElement.src = imageSource;
    imageElement.alt = "{{ $.Page.Params.description | safeHTML }}";
    imageElement.classList.add("featured-image");
    document.querySelector(".hero-container").appendChild(imageElement);
  }
}
