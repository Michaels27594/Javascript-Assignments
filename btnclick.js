// changes 'login' button to 'logout'
function changeBtn(element) {
    console.log(element)
    element.innerText="Logout";
}

// notifies when liked button was clicked
function ninjaLike() {
    console.log(alert("Ninja was liked!"))
}
// removes text
function removeChar(element) {
    element.innerText = "";
}