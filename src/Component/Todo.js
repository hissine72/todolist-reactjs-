import React, { useRef } from "react";
import { useState } from "react";
import Update from "./Update";


const Todo = ()=>{
   const inputref = useRef();
   const [show,setShow] = useState(false);
   const[error,setError] = useState(false)
   const[idx,setidx] = useState(0);

  
 
   

    const[state,setState] = useState([])
   
    const handelAdd = (e)=>{
        if(inputref.current.value === ""){

        }
        else{
        const text = inputref.current.value;
        const newitem = {completed:false,text}
        setState([...state,newitem])       
        inputref.current.value="";
        }
        
    }
    const hadeldone = (index)=>{
        const newtodos =[...state]
        newtodos[index].completed=!newtodos[index].completed
        setState(newtodos);
        console.log(newtodos[index])
        
    }
    const hadeldelte =(index)=>{
        const newtodos =[...state]
        newtodos.splice(index,1)
        setShow(false)
        setState(newtodos)
      

    }
    // const handelup = (textinput)=>{
    //     const newtodos =[...state]
    //     const text =textinput;
    //     const newitem = {completed:false,text}
    //   console.log(index)
    //    console.log(newtodos)
    //    console.log(  newtodos[index]); 
        // console.log(newitem)
        // setState([...state,newitem])  
        // inputref.current.value="";     
     
       
      
        // const newtodos =[...state]
        // const texty = textinput;
       

        //   console.log( newtodos[index].text )
        // //   newtodos[index].text= newtodos[index].texty;

        //    console.log(newtodos)        
    
       
        // setState(newtodos)       
        // inputref.current.value="";
        // setShow(false)

        // console.log(textinput)
        // console.log(index)
        // console.log(newtodos)
        // console.log( newtodos[index])

     
        

    // }
    const handeluppp = (index)=>{
        // const newtodos =[...state]
        // const text =textinput;
        setidx(index)
        setShow(true)
        // setState(newtodos)
        // const newitem = {completed:false,text}
      console.log(index)

      
    }
    const handelup= (text)=>{

if(text=== ""){
    setError(true)
}
else{


        const newtodos =[...state]
        newtodos[idx].text=text;
        setState(newtodos)        
        setShow(false)
        setError(false)
}
        
    } 
   

       

    const card = state.map((el,index)=>{
        return (
        <>
       <div className="delete">
             <div className="del">
                <p  key={index} onClick={()=>hadeldone(index)}  className={el.completed ? "done" : "notdone"} >{el.text}</p>
                <button  onClick={()=> hadeldelte(index)}>delete</button>
                <button onClick= {()=> handeluppp(index)    } >update</button>      
            </div>
           
        </div>
        </>
        )
    })
    
 
      
    return(
        <>
        <div className="parent">
        <input type="text" placeholder="enter your task" ref={inputref}   />
        <button onClick={handelAdd}>+</button>
       
        
        </div>

       { 
          card
       
       }

      { show ? <Update handelup={handelup} state={state} />: ""} 
      {error?<p className="error">enter your upadate</p>:""}

      
        </>
    )
}
export default Todo;