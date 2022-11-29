const modal = document.querySelector(".overlay");

// Show Manual
document.querySelector("#show-modal-btn").addEventListener("click", () => {
    modal.classList.remove("hide-modal")
    modal.classList.add("show-modal");
});


// Show Automatic
// setTimeout(function(){
//     modal.classList.add("show-modal");
// }, 1000);

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    modal.classList.remove("show-modal");
    modal.classList.add("hide-modal");
});