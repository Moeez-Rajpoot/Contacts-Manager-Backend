const express = require('express');
const router = express.Router();


router.route("/").get((req,res)=>{
res.json({
        message: 'Hello there this is get '
    });
});

router.route("/").post((req,res)=>{
    res.json({
            message: 'Hello there create new contact'
        });
});


router.route("/:id").put((req,res)=>{
    res.json({
        message: `Hello there  ${req.params.id}` 
    });
});


router.route("/:id").delete((req,res)=>{
    res.json({
        message: `The Contact is deleted of ${req.params.id}`
    });
});


router.route("/").get((req,res)=>{
    res.json({
        message: 'Hello there'
    });
});

router.route("/:id").get((req,res)=>{
    res.json({
        message: `Getting Contact of id ${req.params.id}`
    });
});

module.exports = router;
