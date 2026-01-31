const links = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#0077ff";
    link.style.fontWeight = "600";
  }
});
