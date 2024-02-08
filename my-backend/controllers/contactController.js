const getcontact = (req,res)=>{
    res.json({
            message: 'Hello there this is get'
        });
    };

const postcontact = (req,res)=>{
    console.log("This is Body msg " , req.body );
    res.json({
           
            message: 'Hello there create new contact'
        });
};


const putcontact = (req,res)=>{
    res.json({
        message: `Hello there  ${req.params.id}` 
    });
};


const deletecontact = (req,res)=>{
    res.json({
        message: `The Contact is deleted of ${req.params.id}`
    });
};

const getcontactid = (req,res)=>{
    res.json({
        message: `Getting Contact of id ${req.params.id}`
    });
};
 
    
module.exports =  {getcontact , postcontact , putcontact , deletecontact , getcontactid};