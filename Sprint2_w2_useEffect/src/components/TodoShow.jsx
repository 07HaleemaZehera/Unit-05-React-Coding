import React from "react";

function TodoShow({ data ,remove}) {  //props
  return (
    <>
      {data.map((e) => {
        return (
          <div className="parent" key={e.id}>
            <div className="Title">
              <h3>{e.Title}</h3>
            </div>
            <div className="Button">
              <button onClick={()=>{
                  remove(e.id)
              }}>
                <h3>{e.Remove}</h3>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoShow;
