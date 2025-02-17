// alert("Coucou, je teste mon script JS");
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".carte");

  card.addEventListener("mouseenter", function () {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
  });
});
