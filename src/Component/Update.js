import { useRef} from "react";

const Update=({handelup,state})=>{
  console.log(state)
 
    
    // const[show,setshow]=useState(false)
   const inputref=useRef()  
   
   
   const handelupdate = ()=>{
    const textinput= inputref.current.value;
    
    handelup(textinput)
   
   
    // console.log(textinput)
   }
  
  return(
    
    <>

     <div className="update">    
        <input placeholder="update your task" ref={inputref}/>
        <button onClick={handelupdate} >go</button>
    </div>
    </>
  )

}
export default Update;