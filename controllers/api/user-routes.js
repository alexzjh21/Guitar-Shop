const router = require('express').Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

router.get('/:id', (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
        console.log("this is your first visit");
    } else {
        req.session.views++
        console.log(`You have visited ${req.session.views} times`)
    }
    User.findOne({
            // protect the password
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                })
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        }) 
        .catch(err => {
            console.log(err);
            res.status(500).json(err);


        });
});

router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        console.log(dbUserData)
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with that email address! '
            });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect password!'
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({
                user: dbUserData,
                message: 'You are now logged in!'
            });
        })

    });
});



router.post('/logout', (req, res) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + req.session.loggedIn)
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
// update the password
router.put('/:id', (req, res) => {
    User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;