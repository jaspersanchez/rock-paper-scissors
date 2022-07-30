// Get the modal
const modal = document.querySelector("#myModal")
// Get the button that opens the modal
const btn = document.querySelector(".btn-play")

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}