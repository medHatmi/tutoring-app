const Conversation = require('../models/Conversation');



// new conv
exports.newConv = async (req, res)=>{
    
    // let list = [req.body.senderId, req.body.receiverId]
    // console.log(req.body);

    const oldConv = await Conversation.findOne({
        members: { $all: [req.body.senderId, req.body.receiverId] },
      });

    // res.status(200).json(oldConv)

    if (oldConv) return;

    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      });
    
      try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
      } catch (err) {
        res.status(500).json(err);
      }

}

//get conv of a user

exports.userConv = async (req, res)=>{

    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.id] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  // get conv include two users 

exports.comConv = async (req, res)=>{

  console.log(req.params.secondUserId);

    try {
      const conversation = await Conversation.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });
      res.status(200).json(conversation)
    } catch (err) {
      res.status(500).json(err);
    }
  }