const express=require("express");
const {generateShortUrl,getOriginalUrl} =require('../controllers/controller')
const router=express.Router();


router.post("/shorten",generateShortUrl);
router.get('/:shortId',getOriginalUrl)
module.exports=router;