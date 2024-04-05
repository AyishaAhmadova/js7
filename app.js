let button = document.getElementById("button");
let say = 1;
let click = true;

button.addEventListener("click", () => {
  if (click) {
    button.textContent = `Click me ${say}`;
    say++;
    if (say > 7) {
      click = false;
    }
  } else {
    say--;
    button.textContent = `Click me ${say}`;
    if (say === 1) {
      click = true;
    }
  }
});
