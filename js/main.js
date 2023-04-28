function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});
