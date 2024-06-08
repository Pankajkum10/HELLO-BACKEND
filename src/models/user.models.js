import mangoose, {Schema} from "mangoose"

import jwt  from "jsonwebtoken"

import bcrypt from "bcrypt"

const UserSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,

        },
          email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        }, 
        
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,//cloudinary url
            required:true,
        },
        coverImg:{
            type:String,

        },
        watchHistory:
        [
            {

                type:Schema.Types.ObjectId,
                ref:"Viedo"
        }],
        password:{
            type:String,
            required:[true,'password is required']
        },
        refeshToken:{
            type:String,
        }





    },{
        timestamps:true
    }
)

UserSchema.pre("save",async function(next){

    if(!this.isModified("password"))
    this.password = bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password){

    return await bcrypt.compare(password, this.password)
}
UserSchema.methods.generateAccessToken =function(){

   return jwt.sign({


        _id:this._id,
        username:this.username,
        email:this.email,
        fullname:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
) },
UserSchema.methods.generateRefreshToken =function(){

    return jwt.sign({
 
 
         _id:this._id,
         
     },
     process.env.EFRESH_TOKEN_SECRET,
     {
         expiresIn:process.env.REFRESH_TOKEN_EXPIRY
     }
 ) },
 


UserSchema.methods.generateRefreshToken=function(){}

export const User = mangoose.model("User",UserSchema)


