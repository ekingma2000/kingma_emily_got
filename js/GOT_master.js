(() => {
let sigilButtons = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector(".lightbox"),
  gotVideo = lightbox.querySelector("video"),
  closeLightBox = lightbox.querySelector(".lightbox-close");

//events go in the middle
  function showLightBox() {
    //debugger;

    lightbox.classList.add('show-lightbox');

    gotVideo.play();
  }
  function hideLightBox() {
    lightbox.classList.remove("show-lightbox");
    gotVideo.pause();
    gotVideo.currentTime = 0;
  }
// add a click event to the sigilButtons
sigilButtons.forEach(button => button.addEventListener("click", showLightBox))

closeLightBox.addEventListener("click", hideLightBox);

})();
