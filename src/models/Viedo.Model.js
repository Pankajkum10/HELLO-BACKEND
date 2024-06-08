import mongoose,{Schema} from "mongoose";

const viedoSchema=new mongoose(
    {
        viedoFile:{
            type:String, //cloudinary url
            required:true
        },
        thumbnail:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        discription:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        views:{
            type:Number,
            required:true,
            default:0,
        },
        isPublished:{
            type:Boolean,
            required:true,
            default:true
        },
        viedouplorder:{
            type:Schema.type.ObjectId,
            ref:"User"
        }

},{timestamps:true});

export const Viedo =mongoose.model("Video",viedoSchema)