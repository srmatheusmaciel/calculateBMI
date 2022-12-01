// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector('#weight');
  const inputHeight = e.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult('weight inválido', false);
    return;
  }

  if (!height) {
    setResult('height inválida', false);
    return;
  }

  const bmi = getBmi(weight, height);
  const levelBmi = getLevelBmi(bmi);

  const msg = `Your bmi is ${bmi} kg (${levelBmi}).`;

  setResult(msg, true);
});

function getLevelBmi(bmi) {
  const level = ['Underweight, eat more!', 'Normal weight, congratulations!',
  'Overweight, be careful!', 'Obesity grade 1, go on a diet.',
  'Grade 2 obesity, take care of your health!', 'Grade 3 obesity, see a doctor.'];

    if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
  }

function getBmi (weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function createParagraph () {
  const paragraph = document.createElement('p');
  return paragraph;
}

function setResult (msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const paragraph = createParagraph();

  if (isValid) {
    paragraph.classList.add('paragraph-result');
  } else {
    paragraph.classList.add('bad');
  }

  paragraph.innerHTML = msg;
  result.appendChild(paragraph);
}
