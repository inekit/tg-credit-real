var express = require('express');
var router = express.Router();
var { login, register, authAdmin: auth } = require('../controllers/user.authentication');
var UsersController = require('../controllers/user.controller');
var PostsController = require('../controllers/posts.controller');
var TagsController = require('../controllers/tags.controller');
var ProjectsController = require('../controllers/projects.controller');
var StaticsController = require('../controllers/statics.controller');
var CommentsController = require('../controllers/comments.controller');

var fileUpload = require('express-fileupload');
router.use(fileUpload({}));

router.get('/users', auth, UsersController.getAll);

router.delete('/users', auth, UsersController.adminDelete);

router.get('/posts', auth, PostsController.getAllWithText);

router.post('/posts', auth, PostsController.addOne);

router.put('/posts', auth, PostsController.editOne);

router.delete('/posts', auth, PostsController.deleteOne);

router.post('/tags', auth, TagsController.addOne);

router.put('/tags', auth, TagsController.editOne);

router.delete('/tags', auth, TagsController.deleteOne);

router.post('/projects', auth, ProjectsController.addOne);

router.put('/projects', auth, ProjectsController.editOne);

router.delete('/projects', auth, ProjectsController.deleteOne);

router.post('/comments', auth, CommentsController.addOne);

router.put('/comments', auth, CommentsController.editOne);

router.delete('/comments', auth, CommentsController.deleteOne);

router.put('/statics', auth, StaticsController.editOne);

router.post('/login', login.local);

router.put('/register', register.local);

router.get('/logout', auth, (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    return res.send(JSON.stringify({ isAuthenticated: req.isAuthenticated() }));
  });
});

module.exports = router;
