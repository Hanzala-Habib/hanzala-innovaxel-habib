const mongoose= require("mongoose");


const urlSchema= new mongoose.Schema(
    {
        url:{
            type: String,
            required: true
        },
        shortUrl:{

            type: String,
            required: true,
            unique: true
        },

        totalclicks:[
            {
                timestamp:{
                    type: Number
                }
            }
        ]

    },{timestamps: true}
);


const URL=mongoose.model("urlShortner", urlSchema);
module.exports=URL;