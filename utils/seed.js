const { default: mongoose } = require("mongoose");
const connection = require("../config/connection");

//require models
const User = require("../models/User");
const Thought = require("../models/Thought"); //this includes the subdocument to reactions

// data on users
const users = [
    {
        username: "MilanJames",
        email: 'milanjames@test.com',
        password: "test123",
        friends: []
    },
    {
        username: "SophyJohn",
        email: 'sophyjohn@test.com',
        password: "hello123",
        friends: []
    },
    {
        username: "HavilTony",
        email: 'haviltony@test.com',
        password: "123test",
        friends: []
    }
];
//data on thoughts
const thoughts = [
    {
        thoughtText: "Hope you are doing well!",
        username: "MilanJames",
        reactions: []
    },
    {
        thoughtText: "Happy weekend!",
        username: "SophyJohn",
        reactions: []
    },
    {
        thoughtText: "We can meet the next day!!",
        username: "HavilTony",
        reactions: []
    }
];

const reactions = [
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "That's so nice!",
        username: "HavilTony"
    },
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "Awesome!",
        username: "SophyJohn"
    },
    {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: "Yes I do!",
        username: "MilanJames"
    }
];

connection.on('error', (err) => err);

connection.once("open", async () => {
    await User.deleteMany({})
    await Thought.deleteMany({})

   await User.insertMany(users)

   for (let i = 0; i < thoughts.length; i++) {
    const newThought = await Thought.create({
      thoughtText: thoughts[i].thoughtText,
      username: thoughts[i].username,
      reactions: reactions[i % reactions.length] // Using modulus to cycle through reactions
    });
  
    await User.findOneAndUpdate(
      { username: thoughts[i].username },
      {
        $push: { thoughts: newThought.id }
      }
    );
  }


   console.table(users)
   console.table(thoughts)
   console.table(reactions)
   console.log("Data seeded!")
   process.exit(1)
})