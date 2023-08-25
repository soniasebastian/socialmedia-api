//CRUD - Create, Read , Update, Delete
const router = require('express').Router();

const {
    getOneThought,
    getAllThoughts,
    createThought,
    deleteThought,
    updateThought,
} = require ('../../controllers/thoughtController')
//Thoughts Model requires: thoughtID, thoughtText, username
router.route('/:_id').get(getOneThought);
// GET ALL thoughts
// CREATE a New thought
router.route('/').get(getAllThoughts).post(createThought);
// GET a specific thought
// DELETE a specific thought
router.route('/:_id').delete(deleteThought);
// future-state UPDATE-POST an existing thought
router.route('/:_id').put(updateThought);
// CREATE a new reaction to another user's thought
const {
    addReaction,
    deleteReaction,
} = require ('../../controllers/usersReaction')
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;