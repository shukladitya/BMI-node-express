const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/frontend/calculatorInterface.html');
})

app.post('/',(req,res)=>{
	bmi=Number(req.body.weight)/(Number(req.body.height/100)*Number(req.body.height/100));
	res.send(`<h1>Your BMI: ${bmi}`);
})


app.listen(3000,()=>{
	console.log('listening at port 3000');
})