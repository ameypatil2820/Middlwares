const jwt = require('jsonwebtoken') 

const middl = (req,res,next) =>{
      
    const token = req.header("Authorization")?.replace("Bearer ","");
    if(!token){
        return res.status(401).json({
            message:"Token Not Found"
        })
    };

    try {
        const decode = jwt.verify(token,"ameypatiljbalajipatil");
        req.user = decode;
        next();
    } catch (error) {
        return res.status(422).json({
            message:"Token Not Valid"
        })
    }
}

module.exports = middl;