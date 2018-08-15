'use strict'
function deleteTodos(todo, request, response){
  todo.delete();
  todo.read()
    .then(todos => {
      response.json({ todos });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = deleteTodos;
