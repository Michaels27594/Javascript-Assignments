console.log("page loaded...");

document.getElementById("myVideo").addEventListener("mouseover", function() {
    this.play();

} );

document.getElementById("myVideo").addEventListener("mouseleave", function() {
    this.pause();

} );