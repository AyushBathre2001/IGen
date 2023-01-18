import { useState } from "react";
import Formcontext from "./formcontext";



const Formstate = (props)=>{
    
    const[arr,setArr] = useState([])
    const[cd,setcd] = useState({name:"",number:"",amount:""})

    return (
        <Formcontext.Provider value={{setArr,setcd,arr,cd}}>
            {props.children}
        </Formcontext.Provider>
    )
}

export default Formstate