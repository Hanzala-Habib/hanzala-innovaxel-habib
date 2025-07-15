const express= require('express');
const urlRoute= require('./routes/routes');
const { connectToDb } =require('./connection');
const app= express();
const PORT=8001;
connectToDb('mongodb://localhost:27017/short_url').then(() => console.log("mongodb connect successfully") );
app.use(express.json())
app.use('/',urlRoute);
app.listen(PORT,()=>console.log(`server started at port: ${PORT}`))