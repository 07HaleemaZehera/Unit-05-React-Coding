
import{useState} from "react";
import './CounterCss/CounterCss.css';
export function Counter(props){
    // console.log("Counter received props:",props)
    const [counter,setCounter]=useState(0);
    const handleChange=(value)=>{
        setCounter(counter+value)
    }
    const handleDouble=(value)=>{
        setCounter(counter*2)
    }

    return  <h3>
        <div className="heading">
            <h3 >
                Counter:{counter}
            </h3>
            <button className="name"onClick={()=>{handleChange(1)
               
            }}>Increment
            </button><br>
            </br><br></br>
            <button className="name"onClick={()=>{handleChange(-1)
                // setCounter(counter-1)
            }}>Decrement
                </button>
                <br></br>
                <br></br>
                <button className="name" onDoubleClick={()=>handleDouble(2)}>
                    Double Click
                    {/* alert("The answer for double clicked Number is") */}
                </button>
        </div>
       
     </h3>
}
