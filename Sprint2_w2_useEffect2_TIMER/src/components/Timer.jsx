import { useEffect, useState } from "react"

export function Timer(){

    const [time, setTime] = useState(5)
    
    useEffect(()=>{
        const id = setInterval(()=>{
            setTime((prev)=>{
                if(prev<=1){
                    return 0
                    }
                     return   prev-1
             })
            },1000)
            return ()=>{
                clearInterval(id)
            }
        },[])
    console.log(time)
    return <div>
     <h1> time:{time}</h1></div>
 }