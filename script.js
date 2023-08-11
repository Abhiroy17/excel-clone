const menuBar = document.querySelector(".menu-bar");
const menuActions = document.querySelectorAll(".menu-action");

menuBar.addEventListener("click", (e) => {
  menuActions.forEach((menuAction) => {
    console.log(menuAction.classList)
    menuAction.classList.remove("menu-action-active");
  });

  if (e.target.classList.contains("menu-action"))
    e.target.classList.add("menu-action-active");
});
