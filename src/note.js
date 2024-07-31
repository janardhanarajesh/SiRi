import axios from "axios";
import { useEffect } from "react";
// import user from "../../server/models/user";

function Note()
{

    useEffect(()=>{
        if(!localStorage.getItem("username"))
        {
            alert("login first")
            window.location.href="/login"
        }
        else if(localStorage.getItem("filename"))
        {
            document.getElementById("fname").value=localStorage.getItem("filename")
            document.getElementById("note").value=localStorage.getItem("data")
            // localStorage.setItem("dis","true")
        }
     
    })
    
    const submit=(e)=>{
        e.preventDefault();
        let fname=document.getElementById("fname").value;
        let not=document.getElementById("note").value;
        let uname=localStorage.getItem("username")
        let notes={
            username:uname,
            note:not,
            filename:fname
        }
        axios.get("https://behind-3e79.onrender.com/findnote/"+fname+"/"+uname).then((res)=>{
            if(res.data.msg=="found")
            {
                alert("file name already exist")
                        /* eslint-disable no-restricted-globals */

                let a=confirm("do you want to change the data in the file")
                        /* eslint-disable no-restricted-globals */
if(a==true)
{
    let fil=localStorage.getItem("fileid");
    axios.put("https://behind-3e79.onrender.com/update/"+not+"/"+fil).then((re)=>{
        alert(re.data.msg)
    })
}
else{
    alert("you can open a new file")
}
            }
            else{
axios.post("https://behind-3e79.onrender.com/postnote",{notes}).then((rep)=>{
    if(rep.data.msg=="success")
    {
        alert("saved")
    }
    else{
        alert("failed to save")
    }
})
            }
        })
    }
    const logout=()=>{
        localStorage.removeItem("username")
        alert("have to login")
        window.location.href="/login"
        // localStorage.setItem("dis","false")
    }
    const open=(e)=>{
        window.location.href="/files"

    }
const newf=()=>{
    localStorage.removeItem("filename")
    localStorage.removeItem("data")
    document.getElementById("fname").value=""
    document.getElementById("note").value=""
    // localStorage.removeItem("dis")

}
let isdis=localStorage.getItem("dis")
    return(
        <center>
        <div id="not">
        <div id="logout">
<button onClick={logout} id="lof">logout</button>


        </div>
<form onSubmit={submit}>
<div id="but">
<input type="submit" id="b" value="save"/>
<button onClick={open} id="o">open</button>
<button onClick={newf} id="n">new</button>
</div>
    <input type="text" id="fname" placeholder="enter file name" required disabled={isdis}/>
    <br/>
    <br/>
    <br/>

    <textarea id="note" required maxLength={8000} placeholder="max char 8000">
        
    </textarea>
    <br/>
</form>
        </div>
        </center>
    )
}
export default Note
