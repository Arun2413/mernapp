import './Data.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
function Data(){
    const [first,setfirst]=useState([]);
    // const [data,setdata]=useState(false)
    const navi=useNavigate()

    function output(){
    axios.get('http://localhost:24',{
        // id:{id},
        // email:{email},
        // password:{password}
      }).then((res) => {setfirst(res.data)
    })
    }

    function del(id){
        // if(f.data.length===0){
        //   setdata(true)
        // }
        axios.delete(`http://localhost:24/${id}`,
        ).then(()=>output())
    }

    function edit(_id,email,password,age,dob){
        localStorage.setItem("_id",_id);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        localStorage.setItem("age",age);
        // localStorage.setItem("dob",dob);
        navi('/Update')
    }

    function goback(){
        navi('/')
    }
    useEffect(()=>{
        output();
    },[]);
    return(
        <div>
            <button id='a' onClick={goback}>Go Back</button>
            <table>
                <thead>
                <tr>
                    <th>#id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                    <th>Date Of Birth</th>
                    <th>Action</th>
                </tr>
                </thead>
                {first.length === 0 ?  (<h3>No Data Found</h3>) :
               (first.map((f)=> (<tbody>
                <tr>
                    <td>{f._id}</td>
                    <td>{f.email}</td>
                    <td>{f.password}</td>
                    <td>{f.age}</td>
                    <td>{f.dob}</td>
                    <td><button onClick={()=>edit(f._id,f.email,f.password,f.age,f.dob)}>Edit</button>
                    <button onClick={()=>del(f._id)}>Delete</button></td>
                </tr>
                </tbody>)))}
                </table>
            
        </div>
    )
}

export default Data