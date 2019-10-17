const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.SECRET,(err,decode)=>{
            if(err){
                next(Error('Failed to authenticate token'));
            } elde{
                req.decoded=decode;
                next();
            }
        });
    }else{
        next(Error('No token provided'));
    }
};