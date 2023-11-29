const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        console.log(user);
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    const token = jwt.sign(
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '1h' }
                      );
            
                      // Set the token as a cookie
                      res.cookie('token', token, { httpOnly: true });
            
                      res.status(200).json({
                        userId: user._id,
                        token: token,
                      });
                    })
                    .catch((error) => res.status(500).json({ error }));
                })
                .catch((error) => res.status(500).json({ error }));
            };

exports.getOneUser = (req, res, next) => {
                User.findOne({
                  _id: req.params.id,
                   email: req.body.email,
                     password: req.body.password
                }).then(
                  (User) => {
                    res.status(200).json(thing);
                  }
                ).catch(
                  (error) => {
                    res.status(404).json({
                      error: error
                    });
                  }
                );
              };

exports.read = (req, res, next) => {
    User.find( { _id: req.params.id , email: req.body.email, password: req.body.password})
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
  };