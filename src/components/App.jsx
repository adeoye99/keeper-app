import React, { useState } from "react";
import Heading from "./Heading";
import "../style.css";
import Note from "./Note";
import InputArea from "./InputArea";
import DeleteIcon from '@mui/icons-material/Delete';



function App(){
    
    const [newNotes,setNewnotes] = useState([])
  
    function handleClick(notes){
        setNewnotes((prevalues)=>{
            return [...prevalues,notes]
        })

     
    }
    function deleteNote(id){
            setNewnotes((prevalues)=>{
               return prevalues.filter((items,index)=>{
                      return index != id
                })
            })
    }
    return (
        <div>
            <Heading />
            <InputArea 
            addNotes = {handleClick}
            />
           
            <div>
            {newNotes.map((noteitems,index)=>
                  <Note
                    title ={noteitems}
                    about ={noteitems}
                    unCheck={deleteNote}
                    key ={index}
                    id ={index}
                   />)}
              </div>     
        </div>
    )
}
export default App;