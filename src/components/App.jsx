import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [data,setData] = React.useState([]);
  function handleChange(input){
    setData((prevItem)=>{
      return [...prevItem,input];
    })
  }
  function handleDel(id){
    setData((prevItem)=>{
      return prevItem.filter((item,idx)=>{
        return idx!=id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea click = {handleChange} />
      {data.map((x,i)=>{
        return(<Note key = {i} id = {i} head = {x.title} body = {x.content} delkey={handleDel}/>);
      })}
      <Footer />
    </div>
  );
}

export default App;
