let card = document.getElementById("card");

document.querySelector("#yes").addEventListener("click", function () {
  alert('I knew you would say yes!');
  window.location.href = 'https://www.youtube.com/watch?v=inBD4f253Pg';
});

document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});