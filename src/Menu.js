// import { Collection } from "mongoose"
import { Link } from "react-router-dom"
function Menu()
{
    return(
        <center>
        <div id="menu">
            
        <div id="logo">
<span><b id="S">S</b>i<b id="R">R</b>i</span>

    </div>
<div id="submenu">
    
<div className="submenu">
<Link to="/"  style={{color:"white",textDecoration:"none"}}>HOME</Link>
</div>
<div className="submenu">
<Link to="/signup" style={{color:"white",textDecoration:"none"}}>SIGN UP</Link>

</div>
<div className="submenu">
<Link to="/login" style={{color:"white",textDecoration:"none"}}>SIGN IN</Link>

</div>
</div>
        </div>
        </center>
    )
}
export default Menu