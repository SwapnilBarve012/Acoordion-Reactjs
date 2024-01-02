import React from 'react';
import './App.css';
import Accordion from './Accordion';


const items = [
  {
    title:"Section 1",
    Content: "Content for Section 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
  },
  {
    title:"Section 2",
    Content: "Content for Section 2 500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
  }
]

const App = () => {
  return (
    <div>
      <h1>React Accordion</h1>
      <Accordion items={items}/>
    </div>
  )
}

export default App;
