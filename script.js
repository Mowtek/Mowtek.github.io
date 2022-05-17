let i = 0;
let txt;
if (document.title === "About") {
  const proj = document.getElementById("projectScroll");
  proj.addEventListener("click", () => {
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  });
  txt = "Mowtek.about( )";
} else if (document.title === "Contact") txt = "Mowtek.contact( )";

const typeWriter = () => {
  if (i < txt.length) {
    let txtChar = txt.charAt(i);
    document.getElementById("h1").innerHTML += txtChar;
    i++;
    let speed = Math.floor(Math.random() * 75) + 100;
    setTimeout(typeWriter, speed);
  }
};
let blinks = document.querySelectorAll(".blink");
blinks.forEach((ele) => {
  setInterval(() => {
    ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
  }, 650);
});

window.addEventListener("load", () => typeWriter());
