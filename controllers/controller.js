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

module.exports={
    generateShortUrl
}
