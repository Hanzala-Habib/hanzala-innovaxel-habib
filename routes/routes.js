const express=require("express");
const {generateShortUrl,getOriginalUrl, getUrlAnalytics} =require('../controllers/controller')
const router=express.Router();

router.get('/analytics/:shortId',getUrlAnalytics);
router.post("/shorten",generateShortUrl);
router.get('/:shortId',getOriginalUrl);
module.exports=router;