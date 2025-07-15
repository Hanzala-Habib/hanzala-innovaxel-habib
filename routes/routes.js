const express=require("express");
const {generateShortUrl,getOriginalUrl, getUrlAnalytics,updateId,deleteShortId} =require('../controllers/controller')
const router=express.Router();

router.get('/analytics/:shortId',getUrlAnalytics);
router.post("/",generateShortUrl);
router.get('/:shortId',getOriginalUrl);
router.put('/updateId/:shortId',updateId);
router.delete("/deleteId/:shortId",deleteShortId);
module.exports=router;