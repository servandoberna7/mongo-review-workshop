const db = require('../database/models.js');

module.exports = {
  fetch: (req, res) => {
    const { listName } = req.query;
    console.log('In GET...', listName);
    db.Todo.find(
      {
        list_name: listName
      },
      (err, todos) => {
        if (err) {
          console.log(err);
        } else {
          console.log(todos);
          res.status(200).send(todos);
        }
      }
    );
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    console.log('In POST...', db);
    new db.Todo({
      name: todo,
      list_name: listName
    }).save((err, newTodo) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(newTodo);
      }
    });
  },
  delete: (req, res) => {
    const { todo } = req.query;
    console.log('In DELETE...');
    db.Todo.deleteOne(
      {
        name: todo
      },
      (err, deleted) => {
        if (err) {
          console.log(err);
        } else {
          res.status(202).send('deleted');
        }
      }
    );
  }
};
