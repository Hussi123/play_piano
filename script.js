

const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  checkboxKey = document.querySelector("#checkbox")

let allKeys = [];
let audio = new Audio("tunes/a.wav")

function playTune(key) {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key=${key}]`);
  clickedKey.classList.add('active')
  setTimeout(() => {
    clickedKey.classList.remove('active')
  }, 200)
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key)
  key.addEventListener('click', () => playTune(key.dataset.key))
})

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key)
}

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const showHideKey = () => {
  pianoKeys.forEach(key => key.classList.toggle('hide'));
}

checkboxKey.addEventListener('click', showHideKey)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)


