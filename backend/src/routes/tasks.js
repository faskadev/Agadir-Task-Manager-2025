const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const {
createTask,
getTasks,
updateTask,
deleteTask,
markDone
} = require('../controllers/taskController');


router.use(auth);
router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/done', markDone);


module.exports = router;