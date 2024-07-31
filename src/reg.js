import axios from "axios";

function Register()
{
    const signup=(e)=>{
e.preventDefault();
let uname=document.getElementById("unam").value;
let upassword=document.getElementById("upass").value;
let umail=document.getElementById("umail").value;

let user={
    username:uname,
    password:upassword,
    email:umail
}
axios.get("http://localhost:2006/check/"+uname).then((resp)=>{
if(resp.data.msg=="found")
{
    alert("already registered")
    window.location.href="/login"

}
else{
    axios.post("http://localhost:2006/register",{user}).then((res)=>{
        if(res.data.msg=="success")
        {
            alert("registered successfully")
            window.location.href="/login"
        }
        else{
            alert("registration failed")
        }
    })
}
})
    }
    return(
        <center>
        <div id="reg">
<form onSubmit={signup}>
    <input type="text" id="unam" placeholder="username" required/>
    <br/>
    <input type="password" id="upass" placeholder="password" required/>
    <br/>
    <input type="email" id="umail" placeholder="Gmail" required/>
    <br/>
    <input type="submit"/>

</form>
        </div>
        </center>
    )
}
export default Register