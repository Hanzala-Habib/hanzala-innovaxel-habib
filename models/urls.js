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
                    type: Date
                }
            }
        ],
         expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 24 * 60 * 60 * 1000)
    }

    },{timestamps: true}
);


const URL=mongoose.model("urlShortner", urlSchema);
module.exports=URL;