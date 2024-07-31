import axios from "axios"
import { useEffect, useState } from "react"
function Fi()
{
const[fil,getfile]=useState([])


    useEffect(()=>{
        if(!localStorage.getItem("username"))
        {
            alert("login first")
        }
        else{
            let user=localStorage.getItem("username")
        axios.get("http://localhost:2006/getf/"+user).then((res)=>{
getfile(res.data.file)
        })
    }
    })
    const openfile=(e,text,i)=>{
localStorage.setItem("filename",e)
localStorage.setItem("data",text)
localStorage.setItem("fileid",i)

window.location.href="/note"
    }
    const del=(r)=>{
axios.delete("http://localhost:2006/delnot/"+r).then((re)=>{
    alert(re.data.msg)
})
    }
    return(
        <div>
           {
            fil.map((ele,i)=>{
                return(
                    <div id="fil">
<hr/>

    <h3>{ele.filename}</h3>
 
    <button onClick={()=>openfile(ele.filename,ele.note,ele._id)} id="op">open</button>
 
    <button onClick={()=>del(ele._id)} id="de">delete</button>
                    </div>
                )
            })
           
           }
        </div>
    )
}
export default Fi
