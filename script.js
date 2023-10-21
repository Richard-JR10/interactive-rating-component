var rate = 0;
var selectedButton = null;

var rateButtons = document.querySelectorAll('.rate-buttons button');

rateButtons.forEach(function(button, index) {
  button.addEventListener('click', function () {
    if (selectedButton) {
      selectedButton.classList.remove('selected');
      selectedButton.style.backgroundColor = ''; 
    }

    rate = index + 1;
    updateButtonStyles(button);
  });
});

function updateButtonStyles(clickedButton) {
  selectedButton = clickedButton;
  selectedButton.classList.add('selected');
  selectedButton.style.backgroundColor = 'hsl(217, 12%, 63%)'; 
}

document.getElementById('submit-button').onclick = function () {
  document.getElementById('thank-you-state-id').style.display = 'flex';
  document.getElementById('rate-container-id').style.display = 'none';
  document.getElementById('rate-msg').innerHTML = 'You selected ' + rate + ' out of 5';
};
