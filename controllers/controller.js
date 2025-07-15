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
                timestamp: Date.now(),
            }
        }
    });

     

    if(entry){
         return res.status(200).json({
            id: entry._id,
            url: entry.url,
            shortCode: entry.shortUrl,
            createdAt: entry.createdAt,
            updatedAt: entry.updatedAt
        });

    }
    else{
        res.status(404).json({error: "couldnt fint the url"});
    }

   

    
}

async function getUrlAnalytics(req,res) {

    const shortId=req.params.shortUrl;
    const results= await URL.findOne({shortId});

    return res.json({
        url:results.url,
        shortId:results.shortUrl,
        totalclicks:results.totalclicks.length,
        clickHistory:results.totalclicks
    });

    
}

async function updateId(req,res) {

    const shortId=req.params.shortUrl;
    const {shortCode: newShortCode}=req.body

    const updatedEntry=await URL.findOneAndUpdate({
        shortId
    },{
        shortUrl: newShortCode
    },
    {new: true}
);
  res.status(200).json({
    url: updatedEntry.url,
    shortCode: updatedEntry.shortUrl,
    createdAt: updatedEntry.createdAt,
    updatedAt: updatedEntry.updatedAt
  })
    
}

async function deleteShortId(req,res) {
    const IdTodelete=req.params.shortUrl;
    const deleteEntry=await URL.findOneAndDelete({
        shortUrl: IdTodelete
    },{
        new: true
    });
     if (!deleteEntry) {
            return res.status(404).json({ msg: "Short URL not found." });
        }

    return res.status(200).json({ msg: "Short URL deleted successfully." });
    
}
module.exports={
    generateShortUrl,
    getOriginalUrl,
    getUrlAnalytics,
    updateId,
    deleteShortId
}
