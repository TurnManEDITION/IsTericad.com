// function myFunction() {
//   var copyText = document.getElementById("xmp");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
// }
function myFunction() {
  var range = document.createRange();
  range.selectNode(document.getElementById("xmp"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
  alert("Код скопирован!")
}