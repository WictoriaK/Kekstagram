const commentTexts = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]


const photoDescriptions = [
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
]

const commentsNames = ['Николай', 'Аким', 'Ким', 'Харитон', 'Тимур', 'Степан'];

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInteger = (a, b = 1) => {
  if (a === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


// Функция для проверки максимальной длины строки

const checkLineLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createCommentText = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(commentTexts)
  ).join(' ');



const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createCommentText(),
  name: getRandomArrayElement(commentsNames)
});


const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(photoDescriptions),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 5) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});



const getPhotos = () => Array.from({ length:  25}, (_, photoIndex) => createPhoto(photoIndex + 1))

console.log(getPhotos());
