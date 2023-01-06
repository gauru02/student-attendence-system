import {Link} from "react-router-dom";

function NavBar()
{
	return(
		<> 
			<center>
				<div className="nav">
					<Link to ="/create">Attendance</Link>
					<Link to ="/">Home</Link>
					
				</div>
			</center>
		</>
	);
}
export default NavBar;

		