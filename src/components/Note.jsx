import React from "react";
import  Notecontents from "../Notecontents";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){
    return(
        <div className = "Note" >
           <h2 >{props.title}</h2>
           <p>{props.about}</p>
           <button className ="deletebutton" onClick ={()=>{props.unCheck(props.id)}}><DeleteIcon/></button>
        </div>
    );
}
export default Note;