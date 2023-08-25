const { ObjectId } = require('mongoose').Types;
const { User, Reaction } = require ('../models');


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
    async addReaction(req, res) {
     try {
       console.log('You are adding a new reaction');
       console.log(req.body);
       const reaction = await Reaction.findOneAndUpdate(
         { reactionBody: req.params.reactionBody },
         { $addToSet: { thoughtText: req.body } },
         { runValidators: true, new: true }
       );
   
       if (!reaction) {
         return res
           .status(404)
           .json({ message: `${username} is invalid and no reaction can be added.` })
       }
   
       res.json(reaction);
     } catch (err) {
       res.status(500).json(err);
     }
   },
   
   async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
            { _id:req.params.reactionId }, 
            {$pull: { reaction: req.params.reactionId }},
            { new: true }
            );
    if (!reaction) {
                return res.status(404).json({ message: 'No user with that ID or username if found.'});
            }

            res.json({
                reaction,      
            })  
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},
}

