
import './App.css';
import Header from"./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am obdelet of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  
  const [todos,setTodos]=useState([
  {
    sno: 1,
    title: "go to market",
    desc:"go to market for work"
  },
  {
    sno: 2,
    title: "go to gym",
    desc:"go to gym for workout"
  },
  {
    sno: 3,
    title: "go to work",
    desc:"go to work"
  }
  ])
  return (
    <>
  
      <Header  searchBar={false} title="My Todos List"/>
      <Todos todos={todos} onDelete={onDelete}/>
    
      <Footer/>
      
    </>
    
  );
}

export default App;
