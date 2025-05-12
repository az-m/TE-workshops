const form = document.getElementById("myForm");

form.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  form.reset();

  Object.entries(formValues).forEach(([key, value]) => {
    document.getElementById("output").innerHTML += `<p>${key}: ${value}</p>`;
  });
}
