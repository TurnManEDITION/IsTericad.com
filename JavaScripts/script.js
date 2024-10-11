function myFunction() {
  var range = document.createRange();
  range.selectNode(document.getElementById("xmp"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Код скопирован!")
}
document.querySelector('#button_menu').addEventListener('click', () => {
  document.querySelector('#content').classList.remove('display_block');
  document.querySelector('#content').classList.add('display_none');
  document.querySelector('#content_menu').classList.remove('display_none');
  document.querySelector('#content_menu').classList.add('display_block');
  document.querySelector('#header_content').classList.remove('display_block');
  document.querySelector('#header_content').classList.add('display_none');
})
document.querySelector('#button_back').addEventListener('click', () => {
  document.querySelector('#content').classList.remove('display_none');
  document.querySelector('#content').classList.add('display_block');
  document.querySelector('#content_menu').classList.remove('display_block');
  document.querySelector('#content_menu').classList.add('display_none');
  document.querySelector('#header_content').classList.remove('display_none');
  document.querySelector('#header_content').classList.add('display_block');
})
