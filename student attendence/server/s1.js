const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

app = express()
app.use(cors());
app.use(express.json());

const url="mongodb://localhost:27017";

app.post("/create",(req,res)=>{
		MongoClient.connect(url,(err,database)=>{
			if(err)
			{
				console.log(err);
			}
			else 
			{
				const dbo = database.db("SMS");
				const data={"_id":req.body.rno,"name":req.body.name,"time":req.body.time};
				dbo.collection("student").insertOne(data,(err,result)=>{
						if(err)
							res.send(err);
						else
							res.send(result);
				})
		}
	})
});
app.get("/read",(req,res)=>{
	MongoClient.connect(url,(err,database)=>{
		if(err)
		{
		console.log(err);
		}
		else {
			const dbo = database.db("SMS");
			dbo.collection("student").find({}).toArray((err,result)=>{
				if (err)
					res.send(err);
				else
					res.send(result);
			})
		}	
	})
});


app.delete("/remove",(req,res)=>{
	MongoClient.connect(url,(err,database)=>{
		if(err)
		{
		console.log(err);
		}
		else 
		{
			const dbo = database.db("SMS");
			const data ={"_id":req.body.rno};
			dbo.collection("student").deleteOne(data,(err,result)=>{
				if (err)
					res.send(err);
				else
					res.send(result);
			})
		}	
	})
});



app.listen(9000,()=> {console.log("server is ready at 9000")})

