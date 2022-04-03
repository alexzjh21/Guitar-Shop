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
    console.log(JSON.stringify(req.body))
    Guitar.create({
        guitar_type: req.body.type,
        guitar_brand: req.body.brand,
        price: req.body.price,
        comment_text: req.body.description
    })
    .then(dbGuitarData => res.sendStatus(200))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id',  (req, res) => {
    Guitar.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbGuitarData => {
        if (!dbGuitarData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbGuitarData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
