const router = require('express').Router();
const sequelize = require('../config/connection');
const Guitar = require('../models/Guitar')
router.get('/', (req, res) => {
    Guitar.findAll({
      attributes: [
        'id',
        'guitar_type',
        'guitar_brand',
        'price',
        'comment_text'
      ],
    //   include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    })
    .then(dbGuitarData => {
      const guitars = dbGuitarData.map(guitar => guitar.get({ plain: true }));
  
      res.render('guitarsection', {guitars});
      
    })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     })
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });

  router.get('/main', (req, res) => {
    res.render('main')
  })

  router.get('/sell', (req, res) => {
    res.render('sell')
  })

  router.get('/sign-up', (req, res) => {
    res.render('sign-up')
  })

  module.exports = router;