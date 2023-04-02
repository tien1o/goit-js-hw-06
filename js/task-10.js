const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const itemsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    itemsToAdd.push(div);
  }
  return itemsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
