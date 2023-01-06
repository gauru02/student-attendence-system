import {useState} from "react";
import axios from "axios";

function Create()
{
	const [rno,setRno] = useState("");
	const [name,setName] = useState("");
	const current = new Date();
		const tm = current.toLocaleTimeString("en-US", {
 		hour: "2-digit",
 		minute: "2-digit",
		}); 
	const [time,setTime]=useState(tm);
	

	const save = (event) => {
		event.preventDefault();
		const urladd = "http://localhost:9000/create";
		
		const data = {rno , name , time}
		axios.post(urladd,data)
		.then(res=>{
				if(res.data.insertedId==rno)
					alert("Record Created");
				else
					alert("record already exist");
				setRno("");
				setName("");
				
		})
		.catch(err=>{
			if(err.code=="ERR_NETWORK")
			{
			alert("server down try again later");
			setRno("");
			setName("");
			}	
		})
}

	return(
			<>
				<center>
					<h1>Attendance Page</h1>
					<form onSubmit={save}>
					<input type ="number" placeholder="enter roll number" 
					onChange={(event)=>setRno(event.target.value)} value={rno}/>
					<br/><br/>
					<input type ="text" placeholder="enter name" 
					onChange={(event)=>setName(event.target.value)} value={name}/>
					<br/><br/>
					<input type ="text" id="time"
					onChange={(event)=>setTime(event.target.value)} value={tm}/>
					<br/><br/>
					<input type="submit" value="Save"/>
					</form>
						
				</center>
			</>
		);
	}
export default Create;

				

















