const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display =
    sideMenu.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });
});
