var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/posts.controller');
var CommentsController = require('../controllers/comments.controller');
var ProjectsController = require('../controllers/projects.controller');
var TagsController = require('../controllers/tags.controller');
var StaticsController = require('../controllers/statics.controller');

router.get('/posts', PostsController.getAll);

router.get('/rss', PostsController.getRss);

router.get('/projects', ProjectsController.getAll);

router.get('/tags', TagsController.getAll);

router.get('/comments', CommentsController.getAll);

router.get('/statics', StaticsController.getOne);

module.exports = router;
