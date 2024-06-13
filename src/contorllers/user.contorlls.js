import{asyncHendler} from "../utils/asynchendler.js";

const registerUser=asyncHendler(async(req,res)=>{

      res.status(200).json({
        message:"radhe radhe hare kishna hare krishna radhe radhe"
    })

})

export {registerUser}
