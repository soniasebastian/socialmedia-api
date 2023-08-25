
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // GET all thoughts for a specific user
  async getAllThoughts(req, res) {
    try {
      const thought = await Thought.find();
      return res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // GET a single thought for a user
  async getOneThought(req, res) {
    try { 
      console.log(req.params._id);
      const thought = await Thought.findOne({ _id: req.params._id });
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // CREATE a new thought for a user
  async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findByIdAndUpdate(
                req.body.userId,
                { $addToSet: { thoughts: thought._id } },
                { runValidators: true, new: true }
            );
            res.json({ thought, user });
        } catch (err) {
            res.status(500).json(err);
        }
    },

        async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(req.body);
            const user = await User.findByIdAndUpdate(
              req.body.userId,
                { _id: req.params._Id },
                { $set: req.body },
                { runValidators: true}
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(user, thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

  // Delete thought from a user
     async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(req.body);
            const user = await User.findByIdAndUpdate(
              req.body.userId,
                { _id: req.params._Id },
                { $set: req.body },
                { runValidators: true}
            );
            console.log(thought);
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },
  };

  



