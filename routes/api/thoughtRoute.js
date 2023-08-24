//CRUD - Create, Read , Update, Delete
const router = require('express').Router();

// api/thoughts

// GET all thoughts
// CREATE a new thought
const {
    getOneThought,
    getAllThoughts,
    createThought,
    deleteThought,
} = require ('../../controllers/thoughtController')
//Thoughts Model requires: thoughtID, thoughtText, username

// GET ALL thoughts
// CREATE a New thought
router.route('/').get(getAllThoughts).post(createThought);
// GET a specific thought
// DELETE a specific thought
router.route('/:_id').get(getOneThought).delete(deleteThought);
// future-state UPDATE-POST an existing thought

// CREATE a new reaction to another user's thought
const {
    getAllReactions,
    getOneReaction,
    createReaction,
    deleteReaction,
} = require ('../../controllers/usersReaction')



module.exports = router;