const blogForm = document.querySelector('form');

const formSubmit = function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username').value.trim();
  const titleEl = document.querySelector('#title').value.trim();
  const contentEl = document.querySelector('#content').value.trim();

  if (!usernameEl || !titleEl || !contentEl) {
    const errEl = document.querySelector('#error');
    errEl.textContent = 'Please complete the form.';

    setTimeout(function () {
      errEl.textContent = '';
    }, 4000);

    return;
  }

  const dataForm = {
    username: usernameEl,
    title: titleEl,
    content: contentEl,
  };

  localStorage(dataForm);
  redirect();
};

const redirect = function () {
  location.href = './blog.html';
};

const localStorage = function (data) {
  const blogsAll = getLocalStorage();

  blogsAll.push(data);

  const strinifiedData = JSON.stringify(blogsAll);

  localStorage.setItem('blogs', strinifiedData);
};

blogFomr.addEventListener('submit', formSubmit);
