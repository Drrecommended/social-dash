document
  .querySelector("[data-switch-dark]")
  .addEventListener("click", function () {
    console.log("test")
    document.body.classList.toggle("dark");
  });
