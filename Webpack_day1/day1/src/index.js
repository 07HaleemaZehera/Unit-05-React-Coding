import {add,mul} from "./calc"
import React from "react"
import ReactDom from "react-dom"
import "./index.css"
console.log(add(2,4))

const h2 = document.createElement("h2")
h2.innerText = "Welcome to Webpack"
h2.classList.add("redtext")
const ele = React.createElement("h1",{className: "redtext"},"hello react and webpack")

const input = document.createElement("input")
const btn = document.createElement("button")

btn.onclick = input.value

document.getElementById("root").appendChild(h2)




