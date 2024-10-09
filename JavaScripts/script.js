function myFunction() {
  var range = document.createRange();
  range.selectNode(document.getElementById("xmp"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Код скопирован!")
}