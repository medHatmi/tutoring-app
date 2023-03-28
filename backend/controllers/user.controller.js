const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');


exports.register = async (req, res)=>{

    // console.log(req.body)
    const { email} = req.body;



        const oldUser = await User.findOne({ email });

        // console.log(req.body);
        // console.log(oldUser);
    
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }else{
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        type: req.body.type,
                        email:req.body.email,
                        password: hash
                    }
                    
                    // console.log(user);
                    User.create(user).then(result => {
                        res.status(201).json({
                            result:result,
                            message: "User created successfully",
                        });

                        const id = result._id;
                        const firstName = result.firstName;
                        const lastName = result.lastName;
                        const type = result.type;
                        const email = result.email;

                        console.log(type);

                        Profile.create({
                            id,
                            firstName,
                            lastName,
                            type,
                            email
                        }).then(result => {
                            res.status(201).json({
                                result:result,
                                message: "Profile created successfully",
                            });
                        })

                    }).catch(error => {
                        res.status(500).json({
                            message: error.message,
                        });
                    });
                });
            });
        }

}

exports.login= async (req, res)=>{

    // console.log(req.body);


    
        const { email, password} = req.body;

        const user = await User.findOne({ email });
    
        if (!user) {
            return res.status(401).json({message: "Invalid credentials!"});
        
        }else{
            // console.log(user.password);
            bcryptjs.compare(password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    },process.env.TOKEN_KEY, function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token,
                            user: user
                        });
                    });
                }else{
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }
  
    exports.allusers = async (req, res)=>{

        // console.log('working');
        User.find({}).then(function (users) {
            res.send(users);
            });
    }

    exports.oneUser = async (req, res)=>{


        const friendId = req.params.id;


    
        await Profile.find({ id:friendId }).then(result => {

            // console.log(result);
    
                if(result){
                    // console.log(result);
                    res.status(200).json(result[0]);
                }else{
                    res.status(404).json({
                        message: "Profile not found!"
                    }) 
                }
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong!"
                })
            });
    
    }
  
