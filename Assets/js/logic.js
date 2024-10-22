const modeBtnEl = document.querySelector('#toggle');

const apply = function (mode) {
  let icon, circleColor;

  if (mode === 'light') {
    icon = '☀️';
    circleColor = '#ffb100';
  } else {
    icon = '🌒';
    circleColor = '#8570a5';
  }

  modeBtnEl.textContent = icon;

  document.body.classList = mode;

  document.documentElement.style.setProperty('--circle-color', circleColor);
};

const toggleMode = function () {
  const mode = readState();

  let nextMode;

  if (mode === 'light') {
    nextMode = 'dark';
  } else {
    nextMode = 'light';
  }

  apply(nextMode);

  saveState(nextMode);
};

const getLocalStorage = function () {
  const stringData = localStorage.getItem('blogs');

  const data = JSON.parse(stringData);

  return data || [];
};

const readState = function () {
  const mode = localStorage.getItem('mode') || 'dark';

  return mode;
};

const saveState = function (mode) {
  localStorage.setItem('mode', mode);
};

apply(readState());

modeBtnEl.addEventListener('click', toggleMode);
