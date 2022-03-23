
// import React, { useEffect, useState } from "react";
// import TodoShow from "./TodoShow";
// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';    //id k liye
// function Todo() {
//     const [text, setText] = useState("")
//     const [data, setData] = useState([])
//     const [page, setPage] = useState(1)

//     console.log('data', data);
//     useEffect(() => {
//         getData()  
//     }, [page])
//     function getData() {
//         axios.get(`http://localhost:3000/posts?_limit=3&_page=${page}`).then((res) => {
//             setData(res.data)                    
//         })
//     }
//     function postData() {   //local storage
//         axios.post(`http://localhost:3000/posts`, { Title: text, Remove: "Remove",   id:uuidv4()}).then((res) => {
//             getData()   
//         })
//     }
//     function remove(id){
//         const updated_data= data.filter((e)=>{
// return  e.id !== id

            
//         })
//         setData(updated_data)

//     }

//     return (
//         <>
//             <input type="text" onChange={(e) => setText(e.target.value)} />
//             <button onClick={postData}>Add Todo</button>
//             <TodoShow data={data} remove={remove}/><br></br>
//             <button onClick={()=>{
//                 setPage(page-1)
//             }}>PREV</button><br></br>
//             <br></br>
//             <button onClick={()=>{
//                 setPage(page+1)
//             }}>NEXT</button>

//         </>
//     )
// }
// export default Todo