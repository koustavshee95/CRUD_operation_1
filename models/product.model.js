

const Mongoose =  require("mongoose") ;

 
 const productSchema = Mongoose.Schema(
    {

        name:{
            type:String,
            require: [true,"Please enter your product name"],
        },

        quantity:{
            type:Number,
            require:true,
            default:0
        },

        price:{
            type:Number,
            require:true,
            default:0
        },

        Image:{
            type:String,
            require:false,
        },

    },
    {
        timestamps:true,
    }

);

const Product = Mongoose.model("Product",productSchema);

module.exports = Product;