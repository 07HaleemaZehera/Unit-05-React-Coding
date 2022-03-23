


import { useEffect , useState } from "react";
import axios from "axios";
import  "./Css/Css.css"

export const Form = ()=>{
    const [formData , setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        isMarried: "",
    });
    const [fdata , setFdata] = useState([]);


    const handleChange = (e)=>{
        let {id , value , checked , type} = e.target;
           value = type === "checkbox" ? checked : value;
        setFormData((prev)=>({...prev , [id]:value}));

      
    }

    const handleSubmit = (e)=>{
           e.preventDefault();
           axios.post("http://localhost:3001/users" , formData).then(()=>{
               getData();
           })
    }
    
    useEffect(()=>{
        getData();
    },[])


    
    const getData = ()=>{
        axios.get(`http://localhost:3001/users`).then((res)=>{
            setFdata(res.data);
        });
    };


   const {name , age , address , department , salary , isMarried} = formData;
    return (
        <>
        <form >
            
          
            <h1>SignUp</h1>
            <input type="text"  class="css" placeholder="enter name"  id="name" onChange={handleChange}/>
            <br/>
            <input type="number"  class="css"  placeholder="age" id="age"  onChange={handleChange}/>
            <br></br>
            <input type="text" class="css"  placeholder="address" id="address"  onChange={handleChange}/>
            <br></br>
            <select id="department" value={department} onChange={handleChange}>
                <option value="Technical">-Technical-</option>
                <option value="Non-Technical">-Non-Technical-</option>
            </select>
            <br></br>
            <br/>
            <br></br>
            <input type="number"  class="css"  id="salary" placeholder="salary"  onChange={handleChange}/>
            <br></br>
            <label><h4>IsMarried</h4></label>
            <input type="checkbox" class="css"  id="isMarried" checked={isMarried} onChange={handleChange}/>
            <br></br>
            <input type="submit"  class="css"  value="Submit form" onClick={handleSubmit} />
            
         
        </form>
        
     
        

<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>IsMarried</th>
          </tr>
        </thead>
        <tbody>
        {fdata.map((d)=>(
         <tr>
             <td>{d.name}</td>
             <td>{d.age}</td>
             <td>{d.address}</td>
             <td>{d.department}</td>
             <td>{d.salary}</td>
             <td>{d.isMarried == true ? "Yes":"No"}</td>
         </tr>
         
         ))}
        </tbody>
        
      </table>


    


        </>
    )
}