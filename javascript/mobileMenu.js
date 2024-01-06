const navMenu = document.getElementById("mobile");
const menuBtn = document.getElementById("mobile-icon");

menuBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("showing")) {
    hide();
  } else {
    show();
  }
});

function hide() {
  navMenu.classList.remove("showing");
}

function show() {
  navMenu.classList.add("showing");
  navMenu.animate(
    [
      { transform: "translateX(-200%)", opacity: "0" },
      { transform: "translateX(-150%)", opacity: "1" },
    ],
    {
      duration: 300,
      iterations: 1,
    }
  );
}
