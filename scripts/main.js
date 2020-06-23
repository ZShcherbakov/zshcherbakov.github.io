var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/RMlogo.png') {
      myImage.setAttribute ('src','images/RMlogo2.png');
    } else {
      myImage.setAttribute ('src','images/RMlogo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Представьтесь, пожалуйста!');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', мы приглашаем Вас стать частью Real Madrid Foundation Clinic Russia.';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', мы приглашаем Вас стать частью Real Madrid Foundation Clinic Russia.';
}

myButton.onclick = function() {
  setUserName();
}