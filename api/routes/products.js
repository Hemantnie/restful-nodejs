const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        return res.status(200).json({

            message: 'You discovered the special ID',
            Id: id
        });
    } else {
        return res.status(200).json({
            message: 'You passed an ID',
            id: id
        });
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'Update Product'
    });
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'Delete Product'
    });
})

module.exports = router;