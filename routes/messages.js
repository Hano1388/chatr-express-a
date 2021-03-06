const express = require('express');
const router = express.Router();
const {index, create, update, destroy} = require('../controllers/messages');

// router.get('/', index);
router.get('/', index, (req, res, next) => {
  Message
    .findAll()
    .then(messages => {
      res.render('/', { messages: messages });
    });
});

router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
