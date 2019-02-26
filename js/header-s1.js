function displayNav(){

  var nav = document.getElementById('nav');
  var showNavBtn = document.getElementById('show-nav-btn');
  var getImg = showNavBtn.getElementsByTagName("IMG")[0]

  if(nav.style.display == 'block'){
    nav.style.display = 'none'
    getImg.src = "../../../sade/public/icons/menu-s1-light.png";
  } else {
    nav.style.display = 'block';
    getImg.src = "../../../sade/public/icons/close-s2-light.png";
  }
  console.dir(getImg.src);
}
