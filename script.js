const F = document.querySelector(".F");

function onclick(e) {
  if (e.which == 70) {
    console.log("clicked");
    F.classList.add('afterclick')

  }
}
window.addEventListener("keydown", onclick);

console.log("hello");
