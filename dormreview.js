let initialIndex = 0;
continousScroll();

function continousScroll() {
  let i;
  let images = document.getElementsByClassName("imagescroll");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
    }

  initialIndex++;

  if (initialIndex > images.length) {
    initialIndex = 1
    }

  images[initialIndex-1].style.display = "block";  
  setTimeout(continousScroll, 2000);
}