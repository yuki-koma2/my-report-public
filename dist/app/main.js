import { renderRoute } from "./render.js";

const app = document.querySelector("#app");

function render() {
  app.innerHTML = renderRoute(window.location.hash);
  app.focus({ preventScroll: true });
}

window.addEventListener("hashchange", render);
render();
