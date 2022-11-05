export async function fetchQuestions() {
  return JSON.stringify([
    //1
    {
      id: 1,

      imgUrl:
        'https://s.afisha.ru/mediastorage/52/22/ee261644ef644072865c41372252.jpg',

      answers: [
        {
          text: 'Семь',
          correct: true,
        },
        {
          text: 'Знакомьтесь, Джо Блэк',
        },
        {
          text: 'Бойцовский клуб',
        },
        {
          text: 'Загадочна история Бенджамина Баттона',
        },
      ],
    },
    //2
    {
      id: 2,

      imgUrl:
        'https://static.life.ru/publications/2022/5/17/155419609733.20782-900x.jpeg',

      answers: [
        {
          text: 'Начало',
        },
        {
          text: 'Великий Гэтсби',
        },
        {
          text: 'Волк с Уолл Стрит',
          correct: true,
        },
        {
          text: 'Остров роклятых',
        },
      ],
    },
    //3
    {
      id: 3,

      imgUrl:
        'https://www.independent.com/wp-content/uploads/2022/03/arrival.jpg',

      answers: [
        {
          text: 'Живое',
        },
        {
          text: 'Грань будущего',
        },
        {
          text: 'Интерстеллар',
        },
        {
          text: 'Прибытие',
          correct: true,
        },
      ],
    },
    //4
    {
      id: 4,

      imgUrl:
        'https://cs12.pikabu.ru/post_img/big/2021/09/18/11/1631988389143096969.png',

      answers: [
        {
          text: 'Мстители: Война бесконечности',
        },
        {
          text: 'Дюна',
          correct: true,
        },
        {
          text: 'Звездные войны: Скайуокер. Восход',
        },
        {
          text: 'Тор: Рагнарёк',
        },
      ],
    },
    //5
    {
      id: 5,

      imgUrl:
        'https://cdn5.vedomosti.ru/crop/image/2017/7q/36bcg/original-446.jpg?height=609&width=1082',

      answers: [
        {
          text: 'Безумный Макс: Дорога ярости',
        },
        {
          text: 'Марсианин',
        },
        {
          text: 'Бегущий по лезвию 2049',
          correct: true,
        },
        {
          text: 'Мстители: Финал',
        },
      ],
    },
    //6
    {
      id: 6,

      imgUrl:
        'http://colorado-cat.ru/wp-content/uploads/2014/08/garri-potter-kubok-ognia-1.jpg',

      answers: [
        {
          text: 'Властелин колец: Возвращение короля',
        },
        {
          text: 'Хоббит: Пустошь Смауга',
        },
        {
          text: 'Гарри Поттер и Кубок огня',
          correct: true,
        },
        {
          text: 'Фантастические твари и где они обитают',
        },
      ],
    },
    //7
    {
      id: 7,

      imgUrl:
        'https://life4health.ru/wp-content/uploads/2018/04/Zelenaya-milya_001.jpg',

      answers: [
        {
          text: 'Зеленая миля',
          correct: true,
        },
        {
          text: 'Форрест Гамп',
        },
        {
          text: 'Побег из Шоушенка',
        },
        {
          text: 'Пролетая над гнездом кукушки',
        },
      ],
    },
    //8
    {
      id: 8,

      imgUrl:
        'https://img.gazeta.ru/files3/99/12139099/upload-05-pic905-895x505-85957.jpg',

      answers: [
        {
          text: '1 + 1',
        },
        {
          text: 'Богемская рапсодия',
        },
        {
          text: 'Зеленая книга',
          correct: true,
        },
        {
          text: '12 лет рабства',
        },
      ],
    },
    //9
    {
      id: 9,

      imgUrl:
        'http://concepture.club/common/uploads/articles/8/1457203254omerzitelnayavosmerka4.jpg',

      answers: [
        {
          text: 'Бешеные псы',
        },
        {
          text: 'Криминальное чтиво',
        },
        {
          text: 'Освобожденный Джанго',
        },
        {
          text: 'Омерзительная восьмерка',
          correct: true,
        },
      ],
    },
    //10
    {
      id: 10,

      imgUrl: 'https://cdn.kino.ru/images/originals/3574/41.jpg',

      answers: [
        {
          text: 'Серый человек',
        },
        {
          text: 'Драйв',
          correct: true,
        },
        {
          text: 'Славные парни',
        },
        {
          text: 'Только бог простит',
        },
      ],
    },
  ]);
}
