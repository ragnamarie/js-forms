console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.target.elements.firstName.focus();

  const formData = new FormData(event.target);

  const complaints = Object.fromEntries(formData);

  console.log(event.target.elements);
  console.log(complaints);

  event.target.reset();
});
