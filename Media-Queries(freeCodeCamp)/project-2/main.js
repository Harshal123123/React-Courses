window.onresize = screen;
window.onload = screen;

function screen() {
  const myWidth = window.innerWidth;
  document.getElementById("size").innerHTML = "Width : " + myWidth + "px";
}
