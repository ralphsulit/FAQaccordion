// Toggle Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const image = this.querySelector('.image');
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      image.src = 'assets/images/icon-plus.svg'
    } else {
      panel.style.display = "block";
      image.src = 'assets/images/icon-minus.svg'
    }
  });
}
