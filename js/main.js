var show = function () {

  var handle = document.querySelector('.handle');
  var ul = document.querySelector(".top-menu");

  if(ul.className === "top-menu") {
    ul.className = "top-menu showing";
  } else if (ul.className === "top-menu showing") {
    ul.className = "top-menu";
  }
};
