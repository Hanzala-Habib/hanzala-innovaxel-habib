const shortId=require('shortid');
const URL=require('../models/urls');

async function generateShortUrl(req, res) {

    const body=req.body;
    const shortID=shortId();

    if(!body.url) return res.status(400).json({ error: "url is missing"});
await URL.create({
    url:body.url,
    shortUrl: shortID,
    totalclicks:[]

});


return res.status(201).json({ id: shortID});
    
}

async function getOriginalUrl(req,res) {

    const shortID= req.params.shortUrl
   const entry= await URL.findOneAndUpdate({
        shortID
    },{
        $push:{
            totalclicks:{
                
            }
        }
    });

    res.redirect(entry.url).status(200).json({originalURL: entry.url});

    
}

module.exports={
    generateShortUrl,
    getOriginalUrl
}
