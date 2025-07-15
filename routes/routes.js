const express=require("express");
const {generateShortUrl,getOriginalUrl, getUrlAnalytics,updateId} =require('../controllers/controller')
const router=express.Router();

router.get('/analytics/:shortId',getUrlAnalytics);
router.post("/",generateShortUrl);
router.get('/:shortId',getOriginalUrl);
router.put('/:updateId',updateId);
module.exports=router;