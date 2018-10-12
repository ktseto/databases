var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/classes/messages', controller.messages.get);

router.post('/classes/messages', controller.messages.post);

router.get('/classes/users', controller.users.get);

router.post('/classes/users', controller.users.post);

router.options('/classes/users', controller.users.options);

router.options('/classes/messages', controller.messages.options);

//router.options('/', controller.users.options);

module.exports = router;

