//Get Modal elements
var modal = document.getElementsById("search");

//Get open modal
var modalBtn = document.getElementById("mainNav-search");

//Get modal close
var closeBtn = document.getElementById("closeBtn");

//Listen for open click
modalBtn.addEventListener("click", openModal);

//Listen for close click
closeBtn.addEventListener("click", closeModal);

//Function to open modal
function openModal() {
  modal.style.display = "block";
}

//Function to close modal
function closeModal() {
  modal.style.display = "none";
}
