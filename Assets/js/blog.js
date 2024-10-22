const mainEl = document.querySelector('main');

const newBlog = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);

  return tag;
};

const emptyElement = function () {
  newBlog('No Blog posts yet...', mainEl);
  const text = newBlog('Enter your own submission here!');

  a.href = './index.html';
};

const readBlogList = function () {
  const blogs = readLocalStorage();

  if (!blogs.length) {
    emptyElement();

    return;
  }

  for (let blog of blogs) {
    const article = newBlog('article', null, mainEl);

    newBlog('h2', blog.title, article);
    newBlog('blockquote', blog.content, article);
    newBlog('p', `Posted by: ${blog.username}`, article);

    article.classList.add('card');
  }
};

readBlogList();
