const counter = document.querySelector(".counter"),
  btns = document.querySelectorAll("button");

let count = 1;

const updateCounter = () => {
  counter.innerText = count < 10 ? "0" + count : count;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(count);
    btn.className === "decrement" ? count-- : count++;
    if (count <= 1) {
      btns[0].style.pointerEvents = "none";
      count = 1;
      console.log(count);
    } else {
      btns[0].style.pointerEvents = "auto";
    }
    updateCounter();
  });
});
