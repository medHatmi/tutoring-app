const FirstLevel = require('../models/FirstLevel');
const SecondLevel = require('../models/SecondLevel');
const ThirdLevel = require('../models/ThirdLevel');
const ForthLevel = require('../models/ForthLevel');
const FifthLevel = require('../models/FifthLevel');

exports.addLevel = async (req, res)=>{

    // console.log(req.body);

    const newLevel = new FirstLevel(req.body);

    try {
      const savedLevel = await newLevel.save();
      res.status(200).json(savedLevel);
    } catch (err) {
      res.status(500).json(err);
    }
 
}


exports.deleteLevel = async (req, res)=>{
    const id = req.params.id;

    console.log(id);

        await FirstLevel.deleteOne({_id:id}).then(result => {

            console.log(result);
  
        });
}

exports.getLevel = async (req, res)=>{

    try {
        const levels = await FirstLevel.find({});
        res.status(200).json(levels);
      } catch (err) {
        res.status(500).json(err);
      }  
}

exports.getLevel2 = async (req, res)=>{

    try {
        const levels = await SecondLevel.find({});
        res.status(200).json(levels);
      } catch (err) {
        res.status(500).json(err);
      }  
}

exports.getLevel3 = async (req, res)=>{

    try {
        const levels = await ThirdLevel.find({});
        res.status(200).json(levels);
      } catch (err) {
        res.status(500).json(err);
      }  
}

exports.getLevel4 = async (req, res)=>{

    try {
        const levels = await ForthLevel.find({});
        res.status(200).json(levels);
      } catch (err) {
        res.status(500).json(err);
      }  
}

exports.getLevel5 = async (req, res)=>{

    try {
        const levels = await FifthLevel.find({});
        res.status(200).json(levels);
      } catch (err) {
        res.status(500).json(err);
      }  
}