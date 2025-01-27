function extractClassName(input) {
  // Объект для сопоставления названий месяцев с их номерами
  const months = {
      "January": "01", "February": "02", "March": "03", "April": "04", "May": "05", "June": "06",
      "July": "07", "August": "08", "September": "09", "October": "10", "November": "11", "December": "12",
      "Januar": "01", "Februar": "02", "Maerz": "03", "März": "03", "April": "04", "Mai": "05", "Juni": "06",
      "Juli": "07", "August": "08", "September": "09", "Oktober": "10", "November": "11", "Dezember": "12"
  };

  // Массив для хранения слов из строки
  let words = [];
  let currentWord = ""; // Текущее слово

  // Цикл для разбивки строки на слова вручную
  for (let i = 0; i < input.length; i++) {
      const char = input[i]; // Текущий символ  simbol 
      if (char === " ") { // Если символ — пробел
          if (currentWord.length > 0) { // wenn  nie leer 
              words.push(currentWord); // Добавляем слово в массив  addiern
              currentWord = ""; // Очищаем для следующего слова
          }
      } else {
          currentWord += char; // Добавляем символ к текущему слову
      }
  }
  if (currentWord.length > 0) { // Добавляем последнее слово, если оно есть
      words.push(currentWord);
  }

  // Переменные для хранения года и названия месяца
  let year = null;
  let monthName = null;

  // Цикл для поиска слова "Class", года и названия месяца
  for (let j = 0; j < words.length; j++) {
      if (words[j] === "Class") { // Если найдено слово "Class"
          // Проверяем, что следующее слово — это год (4 цифры)
          if (j + 1 < words.length && words[j + 1].length === 4 && isDigit(words[j + 1])) {
              year = words[j + 1]; // speichen jahre
          }
      }
      // Проверяем, является ли текущее слово названием месяца   check    gibt es diese monat
      if (year && months[words[j]]) {
          monthName = words[j]; // addd    monat 
          break; // Выходим из цикла, так как год и месяц найдены
      }
  }

  // Возвращаем результат в нужном формате или null
  if (year && monthName) {
      return `${year}-${months[monthName]}`; // Формируем строку в формате ГГГГ-ММ
  }
  return null; // Если условия не выполнены, возвращаем null
}

// Функция для проверки, что строка состоит только из цифр
function isDigit(str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] < '0' || str[i] > '9') { // Если символ не цифра
          return false; // Возвращаем false
      }
  }
  return true; // Все символы — цифры
}