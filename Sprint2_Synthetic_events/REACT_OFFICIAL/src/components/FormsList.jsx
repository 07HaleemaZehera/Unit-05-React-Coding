import React from "react";
import "./Css/Css.css"
import Headers from "../components/Header";
function FormsList(data) {
    let res = data.mainData
    console.log('res', res.length);
    let i = 0
    return (
        <>
            <div className="parent">
                <Headers />
                {
                    res.map((element) => {
                        return (
                            <div className="parentChild" key={i++}>
                                <div className="lists">{element.name}</div>
                                <div className="lists">{element.age}</div>
                                <div className="lists">{element.address}</div>
                                <div className="lists">{element.department}</div>
                                <div className="lists">{element.salary}</div>
                                <div className="lists">{element.marital}</div>
                            </div>
                        )
                    })
                }
                <br />
                <br />
            </div>
        </>
    );
}
export default FormsList;
// department: "",
// salary: "",
// marital: "",