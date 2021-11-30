import React , { useState } from "react";


function InputArea(props){
    const [notes,setNote] = useState("");
    function handleChange(event){
        setNote(event.target.value)
         
    }
    return(
    <div> 
         <input className ="input" onChange ={handleChange}  placeholder="Title" value = {notes} ></input>
         <button className="button" onClick = {()=>{props.addNotes(notes)}}type ="submit">+</button>
    </div>
    )
}
    export default InputArea;