
import { useState } from 'react';
import './App.css';

function App() {

const [text,ubdatetext]=useState("")
  const[list,renderlist]=useState([])
  let Add = ()=>{
    list.push(text)
    renderlist([...list])
    ubdatetext("")
  }

  const deleterow = (i)=>{
list.splice(i,1)
renderlist([...list])
  }
  const editRow = (i)=>{
let editInp=prompt("Edit Value")
list[i]=editInp
renderlist([...list])
  }

  return (
<div>
  <div className='w-100 border d-flex justify-content-center'>
    <div className='w-50 text-center py-5'>
<h1>Todo App React</h1>
<div className='row'>
<div className='col-12 text-center py-3 '>
<input value={text } onChange={(e)=>{
  ubdatetext(e.target.value)
}}/>
<button className="btn btn-success m-2" onClick={Add}>Add<span><i className="fa-solid fa-plus"></i></span></button>
</div>
<div className='col-12'>
  <div className='py-3 text-center'>
  {
    list.map((x,i)=>{
    return <h1 key={i}>{x}
    <button className="btn btn-danger m-2" onClick={()=>deleterow(i)}><i class="fa-solid fa-trash"></i></button>
    <button  class="btn btn-secondary" onClick={()=>editRow(i)}><i class="fa-regular fa-pen-to-square"></i></button>
    </h1>
    })
  }
  </div>

</div>
</div>



    </div>

  </div>
</div>
   
  );
}

export default App;
