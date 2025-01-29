document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const modeToggle2 = document.getElementById("modeToggle2");
  const body = document.body;

  // Check local storage for previous theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    modeToggle.src = modeToggle.getAttribute("src-dark");
    modeToggle2.src = modeToggle2.getAttribute("src-dark");
  } else {
    body.classList.remove("dark-mode");
    modeToggle.src = modeToggle.getAttribute("src-light");
    modeToggle2.src = modeToggle2.getAttribute("src-light");
  }

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      modeToggle.src = modeToggle.getAttribute("src-dark");
      modeToggle2.src = modeToggle2.getAttribute("src-dark");
      localStorage.setItem("theme", "dark");
    } else {
      modeToggle.src = modeToggle.getAttribute("src-light");
      modeToggle2.src = modeToggle2.getAttribute("src-light");
      localStorage.setItem("theme", "light");
    }
  }

  modeToggle.addEventListener("click", toggleDarkMode);
  modeToggle2.addEventListener("click", toggleDarkMode);
});
