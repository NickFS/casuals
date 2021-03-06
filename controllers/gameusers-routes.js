const router = require('express').Router();
const { User, Games } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:title', (req, res) => {
    Games.findAll({
        where: {
            title: req.params.title
        },
        include: [User]
    })
        .then(dbUserData => {
            const users = dbUserData.map((user) => user.get({ plain: true }));
            console.log(users)
            res.render('gameusers', {
                layout: 'game',
                users
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;