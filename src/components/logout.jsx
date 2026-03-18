import { useNavigate } from "react-router-dom";
import api from "../../api";

function Logout(){
    const navigate = useNavigate();
  const onlogout = async ()=>{
   
    try{
        const response = await api.post("/api/user/logout");
        if(response.data.success==true){
            setTimeout(() => {
                navigate("/login");
            }, 0);
            
        }
    }catch(err){
        console.log(err);
    }
  }
    return(
        <>
         <div className="container outer flex-column">
          <h1 style={{fontFamily:"monospace",textAlign:"center"}}>login succesfully</h1>
          <br></br>
          <button onClick={onlogout} className="btn btn-danger">Logout</button>
         </div>
        </>
    )
}
export default Logout;