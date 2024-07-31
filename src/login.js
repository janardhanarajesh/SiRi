import axios from "axios"

function Login()
{
    const login=(e)=>{
        e.preventDefault();
        let uname=document.getElementById("uname").value;
        let upassword=document.getElementById("upassword").value;
        console.log(uname,upassword)
        axios.get("https://behind-3e79.onrender.com/login/"+uname+"/"+upassword).then((res)=>{
            if(res.data.msg=="found")
            {
                alert("logged in as "+uname)
                localStorage.setItem("username",uname)
                window.location.href="/note"

            }
            else{
                alert("user not found")
            }

        })
    }
    return(
        <center>
        <div id="log">
<form onSubmit={login}>
    <input type="text" id="uname" placeholder="username" required/>
    <br/>
    <input type="password" id="upassword" placeholder="password" required/>
    <br/>
    <input type="submit" value="login"/>
</form>
        </div>
        </center>
    )
}
export default Login
