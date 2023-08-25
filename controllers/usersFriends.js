const { ObjectId } = require('mongoose').Types;
const { User } = require ('../models');

module.exports = {
    // Get all users
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );   
        
            if (!user) {
                return res.status(404).json({ message: 'Check user and friend ID!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

