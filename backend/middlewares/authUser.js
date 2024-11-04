import jwt from 'jsonwebtoken'

// admin authenticatin middleware 
const authUser = async(req, res, next) => {
    try {

        const {token} = req.headers

       
        if(!token){
           return res.json({success: false, message: "Not Authorized to login"})
        }

            const token_decode = jwt.verify(token, process.env.JWT_SECRET)
            req.body.userId = token_decode.id; //yaha changes kiye hai userId kiya hai --- big mistakes bug----
            
            next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
        
    }
}

export default authUser