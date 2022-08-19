const generateRandomNumber = () => { //генерируем случайное число1 от 1 до 10
    return Math.round(Math.random() * 10)
  };
  
  const sum = (number1, number2) => { //проверочное действие... принимаем 2 числа
    return number1 + number2; //вычисляем сумму двух чисел
  };
  
  const startRound = () => {
    const randomNumber1 = generateRandomNumber(); //генерируем случайное число 1
    const randomNumber2 = generateRandomNumber(); //генерируем случайное число 2
    const answer = prompt(`Сколько будет, если сложить ${randomNumber1} и ${randomNumber2}?`); //задаем вопрос нашему игроку
    const correctAnswer = sum(randomNumber1, randomNumber2); //определение правильного ответа
  
    if (answer === correctAnswer.toString()) { //сравнение ответа через условие
      alert("Ты справился с этим!") //уведомление игрока в случае правильного ответа
    return true; //возвращение результата
    } else { //обратное условие в случае невыполнения первого условия
      alert(`Ответ не вернйы,вот правильный ответ: "${correctAnswer.toString()}".`) //уведомление игрока в случае неправильного ответа
    return false; //возвращение результата
    }
  };
  
  const startGame = () => { //задаем условие для цикла (3 раунда)
    for (let i = 0; i < 3; i += 1) {
      const isCorrect = startRound()
      if (!isCorrect) {
        alert("Упс,игра окончена!");
        return;
      }
    }
    alert("Поздравяем! Вы победили!")
  };
  