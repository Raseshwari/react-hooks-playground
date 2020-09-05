const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();

router.get("/todos", (req, res, next) => {
  Todo.find({}, "title")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.title) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "Todo field cannot be empty",
    });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
