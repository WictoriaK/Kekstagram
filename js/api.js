const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    }).catch((error) => {
      onFail('Не удалось загрузить фото, попробуйте позже');
      throw new Error(`${error.message}`);
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body,
  }).then((response) => {
    if(response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
};

export { getData, sendData };
