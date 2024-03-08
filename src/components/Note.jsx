import React from "react";

function Note(props) {

  return (
    <div className="note">
      <h1>{props.head}</h1>
      <p>{props.body}</p>
      <button onClick={()=>{
        props.delkey(props.id)
      }} >DELETE</button>
    </div>
  );
}

export default Note;
