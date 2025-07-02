function play(userChoice) {
  const choices = ['Камень', 'Ножницы', 'Бумага'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (userChoice === computerChoice) {
    result = `Ничья! Вы оба выбрали ${userChoice}`;
  } else if (
    (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
    (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
    (userChoice === 'Бумага' && computerChoice === 'Камень')
  ) {
    result = `Вы выиграли! Компьютер выбрал ${computerChoice}`;
  } else {
    result = `Вы проиграли! Компьютер выбрал ${computerChoice}`;
  }

  document.getElementById('result').textContent = result;
}
