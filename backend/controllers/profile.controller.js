const Profile = require('../models/Profile');


exports.allprofiles = async (req, res)=>{

    // console.log('working');
    Profile.find({}).then(function (profiles) {
        res.send(profiles);
        });
}


exports.findprofilefriends = async (req, res)=>{

    let list = req.body
    

    // console.log(list);


    await Profile.find({id: { $in: list }}).then(result => {

        // console.log(result);

            if(result){
                // console.log(result);
                res.status(200).json(result);
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


exports.findprofile = async (req, res)=>{


    const id = req.params.id;
    // console.log(id);


    await Profile.findOne({ id }).then(result => {

            if(result){
                // console.log(result);
                res.status(200).json(result);
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

exports.updateprofile = async (req, res)=>{

    console.log(req.body);

    // console.log(req.headers.authorization);
   
    const id = req.params.id


    await Profile.findOne({id})
    .then(profile => {

        if(req.body.firstName )
        {
            profile.firstName = req.body.firstName


        }else{
            profile.firstName = profile.firstName   

        }

        if(req.body.lastName)
        {
            profile.lastName = req.body.lastName
        }else{
            profile.lastName = profile.lastName    
        }

        if(req.file)
        {
            profile.photo = req.file.originalname    
            
        }else{
            profile.photo = profile.photo  
        }

        if(req.body.isTutor)
        {
            profile.isTutor = req.body.isTutor

        }else{
            profile.isTutor = profile.isTutor    

        }

        if(req.body.description)
        {
            profile.description = req.body.description

        }else{
            profile.description = profile.description    

        }


        if(req.body.city )
        {
            profile.city = req.body.city

        }else{
            profile.city = profile.city    

        }

        if(req.body.phone)
        {
            profile.phone = req.body.phone

        }else{
            profile.phone = profile.phone    

        }

        if(req.body.experience)
        {
            profile.experience = req.body.experience

        }else{
            profile.experience = profile.experience    

        }

        if(req.body.profession)
        {
            profile.profession = req.body.profession

        }else{
            profile.profession = profile.profession    

        }

        if(req.body.hourPrice)
        {
            profile.hourPrice = req.body.hourPrice

        }else{
            profile.hourPrice = profile.hourPrices    

        }
  
        res.status(200).json(profile)
        profile.save()
    })

    
}

exports.findtutors = async (req, res)=>{

    // let list = req.body
    

    // console.log(list);


    await Profile.find({ "city" : {$in : req.body.city},  "level" : {$in : req.body.level } ,"profession" : {$in : req.body.profession },}).then(result => {

        // console.log(result);

            if(result){
                // console.log(result);
                res.status(200).json(result);
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