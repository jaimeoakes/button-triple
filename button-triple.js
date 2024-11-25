function clicked(selector){
  const buttonElement = document.querySelector(selector);

  if(!buttonElement.classList.contains('button-turning')){

    turnOffButton();
    
    buttonElement.classList.add('button-turning');
  } else {
    buttonElement.classList.remove('button-turning');
  }
}

function turnOffButton(){
  const previousButton = document.querySelector('.button-turning');

  if (previousButton) {
    previousButton.classList.remove('button-turning')
  }
}