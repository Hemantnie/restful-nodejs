const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were Fetched' 
    });
});

router.get('/:Id',(req,res,next)=>{
    res.status(200).json({
        message: 'Orders were Fetched',
        Id: req.params.Id
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: 'Orders were created' 
    });
});

router.post('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message: 'Orders were created',
        Id : req.params.orderId 
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message: 'Orders Deleted',
        Id : req.params.orderId 
    });
});

module.exports = router;