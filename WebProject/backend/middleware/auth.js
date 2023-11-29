const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
    
       const token = req.headers.authorization.split(' ')[1];
       //const secret = "L011.sS3cr3t"
       //const decodedToken = jwt.verify(token, secret);
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};