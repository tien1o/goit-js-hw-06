const counter = document.querySelector("#counter");
const value = counter.querySelector("#value");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;
value.textContent = counterValue;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
