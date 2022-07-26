// changes profile name

var username = document.querySelector('#username');

// deletes connections with btn
function removeConn1() {
    var connElement = document.querySelector('#conn-Out1');
    var connbtn = document.querySelector(".checkx1")

    connElement.remove();
    connbtn.remove();
     
 }


 function removeConn2() {
    var connElement = document.querySelector('#conn-Out2');
    var connbtn = document.querySelector(".checkx2")

    connElement.remove();
    connbtn.remove();
     
 }

 function edit() {
     username.innerHTML = "Michael S"
 }