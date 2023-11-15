const init = () => {
  const htmlButton = document.querySelector('.js-toggle');
  
  htmlButton.addEventListener('click', () => {
    htmlButton.classList.toggle('added');
    console.log('clicked');
  });
};

document.addEventListener('DOMContentLoaded', init);
