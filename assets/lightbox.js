document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("article img");
    images.forEach(img => {
      img.addEventListener("click", function() {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%;">`;
        lightbox.addEventListener("click", () => lightbox.remove());
        document.body.appendChild(lightbox);
      });
    });
  });
  