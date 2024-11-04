import jwt from 'jsonwebtoken'

// admin authenticatin middleware 
const authAdmin = async(req, res, next) => {
    try {

        const { atoken} = req.headers

        console.log("value of admin token is: ", atoken);

        if(!atoken){
           return res.json({success: false, message: "Not Authorized to login- false admin"})
        }


            const verifiedToken = jwt.verify(atoken, process.env.JWT_SECRET)

            if(verifiedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
                res.json({success: false, message: "Not Authorized to login in verified token"})
            }

            next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message})
        
    }
}
export default authAdmin