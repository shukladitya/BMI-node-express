const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/form.html')
})


app.post('/',(req,res)=>{
	var city=req.body.city;
	
	http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fd385c80e79ad3ff4341df13d6c8b94&units=metric`,
		(response)=>{
			console.log(response.statusCode)
			response.on('data',(dataa)=>{
				const jsonvalue=JSON.parse(dataa);         //converting hex data to json
				

				res.send(`<h1>Temperature at ${jsonvalue.name} is ${jsonvalue.main.temp} degree celsius</h1>
					<h2>weather condition is: ${jsonvalue.weather[0].description}<h2/>
					<img src='http://openweathermap.org/img/wn/${jsonvalue.weather[0].icon}@4x.png'></img>`);
			})
		})
})


app.listen(3000,()=>{
	console.log('listening at port 3000');
})