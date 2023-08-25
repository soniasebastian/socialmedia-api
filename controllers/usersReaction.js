const { ObjectId } = require('mongoose').Types;
const { Thought, Reaction } = require ('../models');


module.exports = {
    async getAllReactions(req, res) {
        try {
            const reaction = await Reaction.find();
            const reactionObj = {
                reaction,
            };
            return res.json(reactionObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Add a new reaction for a user's thought
    async createReaction(req, res) {
      try {
          const thought = await Thought
              .findOneAndUpdate(
              { _id: req.params.thoughtId },
              { $addToSet: { reactions: req.body} },
              { new: true })
              .populate({path: 'reactions', select: '-__v'})
              .select('-__v')

          if (!thought) {
              return res.status(404).json({ message: 'No thought with that ID' });
          }

          res.json(thought);
      } catch (err) {
          res.status(500).json(err);
      }
  },

  async deleteReaction(req, res) {
      try {
          const thought = await Thought.findOneAndUpdate(
              {_id: req.params.thoughtId},
              {$pull: {reactions: {_id : req.params.reactionId}}},
              { runValidators: true, new: true })

          if (!thought) {
              return res.status(404).json({ message: 'Check thought and reaction ID!' });
          }

          res.json(thought);
      } catch (err) {
          res.status(500).json(err);
      }
  },
};


