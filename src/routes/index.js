const router = require('express').Router();

const todos = require('./todoRoutes')

router.get('/', (req, res) => res.send('RestAPI'));
router.use('/todos', todos);

module.exports = router;