let i = 0;
let txt;
if (document.title === "About") txt = "Mowtek.about( )";
else if (document.title === "Contact") txt = "Mowtek.contact( )";

function typeWriter() {
  if (i < txt.length) {
    let txtChar = txt.charAt(i);
    document.getElementById("h1").innerHTML += txtChar;
    i++;
    let speed = Math.floor(Math.random() * 75) + 100;
    setTimeout(typeWriter, speed);
  }
}
const t = setInterval(function () {
  const ele = document.getElementById("blink");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, 650);
