import mangoose, {Schema} from "mangoose"

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
        
        fullname:{
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

export const User = mangoose.model("User",UserSchema)


