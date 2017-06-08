const input = document.querySelector('.text-section-input');

input.addEventListener('input', changeColor);
storeMood();

function changeColor() {
  let randomHex = Math.floor(Math.random() * (360 - 0)) + 0;
  let randomColor = 'rgba(' + randomHex + ', 49, 89, 1)';
  document.body.style.backgroundColor = randomColor;
}

function storeMood() {
  let prevMood = localStorage;
  let prevMoodText = document.querySelector('.previous-mood');
  let date = new Date();
  if (prevMood.getItem('mood') !== null) {
    prevMoodText.innerHTML = 'You said "' + prevMood.getItem('mood') + '" ' + 'on ' + prevMood.getItem('time');
  } else {
    prevMoodText.innerHTML = '<span class="fontelico-emo-happy"></span> &nbsp; Type how you feel above and press enter';
  }
  input.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      console.log(input.value);
      prevMood.setItem('mood', input.value);
      prevMood.setItem('time', date.toDateString());
      prevMoodText.innerHTML = 'You said "' + prevMood.getItem('mood') + '" ' + 'on ' + prevMood.getItem('time');
      //Resets form
      input.value = '';
    }
  })
}
