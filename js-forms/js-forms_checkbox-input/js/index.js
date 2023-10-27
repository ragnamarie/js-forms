console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

console.log(tosCheckbox.checked);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tosCheckbox.value == true) {
    alert("Form submitted");
  }
});
