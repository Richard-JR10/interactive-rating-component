var rate = 1;

document.getElementById('button-1').onclick = function () {
  rate = 1;
  document.getElementById('button-1').style.color = 'white';
  document.getElementById('button-1').style.backgroundColor = 'hsl(217, 12%, 63%)';
  document.getElementById('button-2').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-2').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-3').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-3').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-4').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-4').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-5').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-5').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
};


document.getElementById('button-2').onclick = function () {
  rate = 2;
  document.getElementById('button-2').style.color = 'white';
  document.getElementById('button-2').style.backgroundColor = 'hsl(217, 12%, 63%)';
  document.getElementById('button-1').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-1').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-3').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-3').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-4').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-4').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-5').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-5').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
};

document.getElementById('button-3').onclick = function () {
  rate = 3;
  document.getElementById('button-3').style.color = 'white';
  document.getElementById('button-3').style.backgroundColor = 'hsl(217, 12%, 63%)';
  document.getElementById('button-2').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-2').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-1').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-1').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-4').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-4').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-5').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-5').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
};

document.getElementById('button-4').onclick = function () {
  rate = 4;
  document.getElementById('button-4').style.color = 'white';
  document.getElementById('button-4').style.backgroundColor = 'hsl(217, 12%, 63%)';
  document.getElementById('button-2').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-2').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-3').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-3').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-1').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-1').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-5').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-5').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
};

document.getElementById('button-5').onclick = function () {
  rate = 5;
  document.getElementById('button-2').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-2').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-3').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-3').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-4').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-4').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-1').style.color = 'hsl(216, 12%, 54%)';
  document.getElementById('button-1').style.backgroundColor = 'hsla(216, 12%, 54%, 0.15)';
  document.getElementById('button-5').style.color = 'white';
  document.getElementById('button-5').style.backgroundColor = 'hsl(217, 12%, 63%)';
};

document.getElementById('submit-button').onclick = function () {
  document.getElementById('thank-you-state-id').style.display = "flex";
  document.getElementById('rate-container-id').style.display = "none";
  document.getElementById('rate-msg').innerHTML = "You selected "+ rate + " out of 5";
};
