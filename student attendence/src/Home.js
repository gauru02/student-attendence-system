import {useState , useEffect} from "react";
import axios from "axios";


function Home()
{
	const [info ,setInfo]=useState([]);
	


	useEffect( ()=> {
		let urladd ="http://localhost:9000/read";
		axios.get(urladd)
		.then(res=>setInfo(res.data))
		.catch(err=>console.log(err))
	},[]);
	
	const deleteStudent = (rno)=>{

		let urladd="http://localhost:9000/remove";
		axios.delete(urladd,{data:{rno}})
		.then(res=>console.log(res.data))
		.catch(err=>console.log(err))
		window.location.reload();
	}
	
	const len =info.length;
	return(
		<>
		<center>
			<h1>Home Page</h1>
          <h2>number of students present : {len}</h2>
			<table  border="4" style={{width:'70%'}}>
				<tr>
					<th>Roll No </th>
					<th>Name</th>
					<th>Check in time</th>
					<th>Check Out</th>
				</tr>
			{
				info.map( (e) => (
					<tr style={{'text-align':'center'}}>
						<td>{e._id}</td>
						<td>{e.name}</td>
						<td>{e.time}</td>
					<td><button onClick={ ()=>{if (window.confirm("are you sure"))deleteStudent(e._id)}} >Delete</button> </td>
				
					</tr>
				))
			}
			
			</table>

		</center>
		</>
	);
}
export default Home;

