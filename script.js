isActive = false;

const arrow = document.getElementById("arrow");
const activeBar = document.getElementById("active");

arrow.onclick = function(){arrowPressed()};

function arrowPressed() {
    if (isActive == false) {
        activeBar.style.display = "flex";
        activeBar.style.height = activeBar.scrollHeight + 68 + "px";

        arrow.src = "./images/icon-share-active.svg"
        arrow.style.backgroundColor = "hsl(214, 17%, 51%)";

        isActive = true;
    }
    else {
        activeBar.style.height = "0px";
        setTimeout(() => {activeBar.style.display = ""}, 250); // wait for transition to finish

        arrow.src = "./images/icon-share.svg"
        arrow.style.backgroundColor = "";

        isActive = false;
    }
}