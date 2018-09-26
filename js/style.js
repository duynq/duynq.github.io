$(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  for(i = 1; i < 7; i++){
    document.getElementById("btn"+i).addEventListener(
      "click",
      function(event) {
        if (event.target.value === "+") {
          console.log(event.target.value);
          event.target.value = "-";
        } else {
          event.target.value = "+";
        }
      },
      false
    );
  }
});
