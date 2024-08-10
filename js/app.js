const buttonTitan = document.querySelector('.button-titan');
const buttonCharacter = document.querySelector('.button-character');

const dataTitan = document.querySelector('.data-titan__container');
const dataCharacter = document.querySelector('.data-character__container');

buttonTitan.addEventListener('click', () => {
  if ((dataTitan.style.opacity = '1')) {
    console.log('Elemento ya seleccionado');
    dataCharacter.style.opacity = '0';
  } else {
    dataTitan.style.opacity = '1';
    dataCharacter.style.opacity = '0';
  }
});

buttonCharacter.addEventListener('click', () => {
  if ((dataCharacter.style.opacity = '1')) {
    console.log('Elemento ya seleccionado');
    dataTitan.style.opacity = '0';
  } else {
    dataCharacter.style.opacity = '1';
    dataTitan.style.opacity = '0';
  }
});
