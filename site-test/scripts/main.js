let myImage = document.querySelector('img');

myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/index.jpg') {
     
        myImage.setAttribute('src', 'images/image2.jpg');
    } else {
      
        myImage.setAttribute('src', 'images/index.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  
    let myName = prompt('Veuillez saisir votre nom.');
  
    localStorage.setItem('nom', myName);
  
    myHeading.textContent = 'Les débuts HTML de ' + myName;
}

if (!localStorage.getItem('nom')) {
  
    setUserName();
} 

else {
  
    let storedName = localStorage.getItem('nom');
  
    myHeading.textContent = 'Les débuts HTML de ' + storedName;
}

myButton.addEventListener('click', function () {
  
    setUserName();
});