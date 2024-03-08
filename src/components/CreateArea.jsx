import React, { useState } from "react";

function CreateArea(props) {
  const [data,setData] = useState({
    title:"",
    content:"",
  })
  function handleChange(){
    const {value,name} = event.target;
    if (name === "title"){
      setData((prevItem)=>{
        return{...prevItem,[name]:value};
      })
    }else if(name === "content"){
      setData((prevItem)=>{
        return {...prevItem,[name]:value};
      })
    }
  }
  function submitNote(event){
    props.click(data);
    setData({
      title:"",
      content:"",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={data.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={data.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
