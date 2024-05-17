let stokLink = "";

document.getElementById("linkButton").onclick = function () {
  stokLink = prompt("Будь ласка, введіть посилання:");
  if (stokLink) {
    alert(`Посилання "${stokLink}" додано!`);
  }
};

document.getElementById("derinButton").onclick = function () {
  if (stokLink) {
    window.location.href = stokLink;
  } else {
    alert("Будь ласка, спочатку введіть посилання.");
  }
};
