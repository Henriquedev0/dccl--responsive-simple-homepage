document.querySelector(".hamburger").addEventListener("click", function () {
  var hidden = document.querySelector(".hidden");
  hidden.style.display = "block";
  hidden.querySelector(".middle").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".hidden").style.display = "none";
});
