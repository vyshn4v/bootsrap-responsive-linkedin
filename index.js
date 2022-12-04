document.querySelector(".dropdown").addEventListener("click", function (event) {
    event.preventDefault();
    if (document.querySelector(".menu").style.visibility == "visible") {
        document.querySelector(".menu").style.visibility = "hidden"
    } else {
        document.querySelector(".menu").style.visibility = "visible"
    }
})

document.querySelector(".show-more-news").addEventListener("click", function (event) {
    event.preventDefault();
    if (document.querySelector(".more-news").style.display == "flex") {
        document.querySelector(".more-news").style.display = "none"
        // document.querySelector(".show-more-news").innerHTML = "show more"
        document.querySelector(".show-more-icon").innerText = "arrow_drop_down"
    } else {
        document.querySelector(".more-news").style.display = "flex"
        // document.querySelector(".show-more-news").innerHTML = "show less"
        document.querySelector(".show-more-icon").innerText = "arrow_drop_up"
    }
})