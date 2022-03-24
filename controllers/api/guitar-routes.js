const router = require('express').Router();
//const {Guitar} = require('../../models');
const Guitar = require('../../models/Guitar');


router.get('/', (req, res) => {
    Guitar.findAll({
        attributes: [
            'id',
            'guitar_type',
            'guitar_brand',
            'price',
            'comment_text'
        ]
    })
    .then(dbGuitarData => res.json(dbGuitarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Guitar.findOne({
        where: {
            id: req.params.id
        },
        atrributes: [
            'id',
            'guitar_type',
            'guitar_brand',
            'price',
            'comment_text'
        ]
    })
    .then(dbGuitarData => {
        if(!dbGuitarData) {
            res.status(404).json({message: 'No Guitar found with that id'});
            return;
        }
        res.json(dbGuitarData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Guitar.create({
        guitar_type: req.body.guitar_type,
        guitar_brand: req.body.guitar_brand,
        price: req.body.price,
        comment_text: req.body.comment_text
    })
    .then(dbGuitarData => res.json(dbGuitarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;
