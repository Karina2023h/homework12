const button = document.querySelector("#buttonContainer");

button.addEventListener("click", function (e) {
  if (e.target.classList.contains("myButton")) {
    const buttonText = e.target.textContent;

    console.log(`Клікнуто на кнопці: ${buttonText}`);
    alert(`Клікнуто на кнопці: ${buttonText}`);
  }
});
