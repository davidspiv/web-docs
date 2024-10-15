const gridElements = document.querySelectorAll(".grid-element");
const colors = ["#B1CEBD", "#94AC9E", "#B8D6C5", "#D9926F", "#D6BEAE", "#DBCAAB"];
for (let i = 0; i < gridElements.length; i++) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  gridElements[i].setAttribute("style", `background-color: ${color}`);
}
