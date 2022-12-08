import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

function Content(){
    const navi=useNavigate();
    const [data,setdata]=useState([])
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [age,setage]=useState('')
    // const [dob,setdob]=useState('')

    function submitdata(e){
      e.preventDefault();
    
      axios.post('http://localhost:24',{
        email:email,
        password:password,
        age:age,
        // dob:dob,
      })

      .then(navi('/Data'))
      
      }

      useEffect(()=>{
        axios.get('http://localhost:24').then(res=>{
          console.log(res.data)

          setdata(res.data)
        },[data])
       })
      // console.log(setemail)
     
    
    return(
        <div>
        <form onSubmit={submitdata}>
        <lable>Email</lable><br/>
        <input type='email' onChange={(e)=>setemail(e.target.value)} value={email}></input><br/><br/>
        <lable>Password</lable><br/>
        <input type='password' onChange={(e)=>setpassword(e.target.value)} value={password}></input><br/><br/>
        <label>Age</label><br/>
        <input type='number'onChange={(e)=>setage(e.target.value)} value={age}></input><br/><br/>
        {/* <label>Date Of Birth</label><br/>
        <input type='date' onChange={(e)=>setdob(e.target.value)} value={dob}></input><br/><br/> */}
      <button type="submit">Submit</button>
      </form>
      </div>
    )
}

export default Content