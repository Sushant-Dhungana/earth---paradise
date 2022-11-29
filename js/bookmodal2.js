
var modal2 = document.getElementById("bookModal2");

var btn2 = document.getElementById("myBook2");

var span = document.getElementsByClassName("close-main1")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}