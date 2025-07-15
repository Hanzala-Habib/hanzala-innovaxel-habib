const mongoose=require('mongoose');

async function connectToDb(dburl) {

    return mongoose.connect(dburl);
    
}

module.exports={
    connectToDb
}