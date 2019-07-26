(function(window) {
'use strict';

fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let articleArea = document.getElementById('articlestart');
      json.forEach(function(post) {
        articleArea.innerHTML += `<article><h2>Post ${post['id']}. ${
            post['title']}</h2><p>${post['body']}</p></article>`;
      });
    });

const BUTTON_SELECTOR = '[data-posts="id"]';

let buttons = document.querySelectorAll(BUTTON_SELECTOR);

buttons.forEach(function(button) {
  'use strict';

  let sectionSelector = `#comments-${button.value}`;
  let commentSection = document.querySelector(sectionSelector);

  button.addEventListener('click', function(event) {
    if (commentSection.hidden) {
      commentSection.hidden = false;
      button.textContent = 'Hide comments';
    } else {
      commentSection.hidden = true;
      button.textContent = 'Show comments';
    }

    fetch(`http://jsonplaceholder.typicode.com/comments?postId=${button.value}`)
        .then(response => response.json())
        .then(json =>  {
      console.log(json);
      json.forEach(function(comment) {

      })
    }

    event.preventDefault();
  });
});
})(window);
