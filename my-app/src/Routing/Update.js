import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Update(){
    const [id,setid]=useState(0);
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [age,setage]=useState('');
    // const [dob,setdob]=useState('');
    const navi=useNavigate()

    useEffect(()=>{
        setid(localStorage.getItem('_id'));
        setemail(localStorage.getItem('email'));
        setpassword(localStorage.getItem('password'))
        setage(localStorage.getItem('age'));
        // setdob(localStorage.getItem('dob'));
    },[]);

    function sub(){
        axios.patch(`http://localhost:24/${id}`,{
            email:email,
            password:password,
            age:age,
            // dob:dob,
        }).then(()=>navi('/Data'))

    }
    return(
        <div>
            <label>Email</label><br/>
            <input onChange={(e)=>setemail(e.target.value)} type='email' value={email}></input><br/><br/>
            <lable>Password</lable><br/>
            <input onChange={(e)=>setpassword(e.target.value)} type='text' value={password}></input><br/><br/>
            <label>Age</label><br/>
        <input type='number'onChange={(e)=>setage(e.target.value)} value={age}></input><br/><br/>
        {/* <label>Date Of Birth</label><br/>
        <input type='date' onChange={(e)=>setdob(e.target.value)} value={dob}></input><br/><br/> */}
            <button onClick={sub}>Update</button>
        </div>
    )
}

export default Update