import mongoose from "mongoose";



const PostSchema= mongoose.Schema(
    {
        ProductName:String,
        location:String,
        quantity:Number,
        number:Number
    }
)

const PostMessage= mongoose.model("PostMessage",PostSchema);

export default PostMessage;