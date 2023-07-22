const fs = require("fs");

function generateRandomName() {
  const firstNames = [
    "Алексей",
    "Иван",
    "Сергей",
    "Дмитрий",
    "Андрей",
    "Александр",
    "Николай",
    "Павел",
    "Михаил",
    "Евгений",
    "Владимир",
    "Георгий",
    "Степан",
    "Виктор",
    "Игорь",
    "Олег",
    "Василий",
    "Петр",
    "Константин",
    "Леонид",
    "Борис",
    "Федор",
    "Никита",
    "Григорий",
    "Ярослав",
    "Роман",
    "Тимофей",
    "Анатолий",
    "Егор",
    "Денис",
    "Артём",
    "Кирилл",
    "Максим",
    "Глеб",
    "Илья",
    "Вадим",
    "Руслан",
    "Валерий",
    "Марк",
    "Лев",
    "Геннадий",
    "Эдуард",
    "Савелий",
    "Филипп",
    "Юрий",
    "Станислав",
    "Даниил",
    "Платон",
    "Арсений",
    "Тарас",
    "Богдан",
    "Назар",
    "Остап",
    "Ян",
  ];
  const lastNames = [
    "Иванов",
    "Смирнов",
    "Кузнецов",
    "Попов",
    "Васильев",
    "Петров",
    "Соколов",
    "Михайлов",
    "Новиков",
    "Федоров",
    "Морозов",
    "Волков",
    "Алексеев",
    "Лебедев",
    "Семенов",
    "Егоров",
    "Павлов",
    "Козлов",
    "Степанов",
    "Николаев",
    "Орлов",
    "Андреев",
    "Макаров",
    "Никитин",
    "Захаров",
    "Соловьёв",
    "Борисов",
    "Яковлев",
    "Григорьев",
    "Романов",
    "Воробьёв",
    "Сергеев",
    "Кузьмин",
    "Фролов",
    "Александров",
    "Дмитриев",
    "Королёв",
    "Гусев",
    "Киселёв",
    "Ильин",
    "Максимов",
    "Поляков",
    "Сорокин",
    "Виноградов",
    "Ковалёв",
    "Белов",
    "Медведев",
    "Антонов",
    "Тарасов",
    "Жуков",
    "Баранов",
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function generateRandomPhoneNumber() {
  const num1 = Math.floor(Math.random() * 90 + 10);
  const num2 = Math.floor(Math.random() * 900 + 100);
  const num3 = Math.floor(Math.random() * 90 + 10);
  const num4 = Math.floor(Math.random() * 90 + 10);
  return `7-9${num1}-${num2}-${num3}-${num4}`;
}

function generateRandomAddress() {
  const streets = ["ул. Красная", "ул. Ленина", "ул. Мира", "ул. Пушкина"];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const buildingNumber = Math.floor(Math.random() * 300 + 1);
  const apartmentNumber = Math.floor(Math.random() * 15 + 1);
  return `${street}, д.${buildingNumber}, кв.${apartmentNumber}`;
}

function generateDataAndSaveToFile(filename, count) {
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      index: i,
      name: generateRandomName(),
      phone: generateRandomPhoneNumber(),
      address: generateRandomAddress(),
    });
  }

  fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`Data saved to ${filename}`);
  });
}

generateDataAndSaveToFile("db.json", 15000);
