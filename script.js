const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Avtomatik almashadigan pastki karusel
const carousel = document.getElementById("autoCarousel");
if (carousel) {
  const track = carousel.querySelector(".carousel-track");
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const dots = [...carousel.querySelectorAll(".carousel-dot")];
  let currentSlide = 0;
  let carouselTimer;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
  }

  function startCarousel() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => showSlide(currentSlide + 1), 3500);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startCarousel();
    });
  });

  carousel.addEventListener("mouseenter", () => clearInterval(carouselTimer));
  carousel.addEventListener("mouseleave", startCarousel);
  startCarousel();
}
