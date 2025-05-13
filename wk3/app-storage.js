//globals

const form = document.querySelector("form");
const resetButton = document.getElementById("reset");

//listeners

form.addEventListener("submit", savePreferences);

resetButton.addEventListener("click", (event) => {
  localStorage.clear();
  location.reload();
});

// actions

loadPreferences();

//functions

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const color = formData.get("color");
  const backcolor = formData.get("bcolor");

  const preferences = {
    color,
    backcolor,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
  form.reset();
  location.reload();
}

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    const body = document.querySelector("body");
    body.style.color = preferences.color || "#000000";
    body.style.backgroundColor = preferences.backcolor || "#ffffff";
  }
}
