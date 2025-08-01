import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    ProductName : {
        type : String,
        required : true
    },
    altName : [
        {type : String}
    ],
    description : {
        type : String,
        required : true
    },
    images : [
        {type : String}

    ],
    labelledPrice : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    isAvailable : {
        type : Boolean,
        required : true,
        degault : true
    },

});

const Product = mongoose.model("products", productSchema);

export default Product;
