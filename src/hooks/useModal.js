import React,{useEffect} from "react";
import {useRef} from "react";

const useOutsideClick=()=>{
    const ref=useRef()
    useEffect(function(){
        function handleClick(e) {
            // console.log("CLICKED ",e.target)
            // ref.current ==current element selected StyleModal
            //TODO checking not a element inside form StyledModal.contain(e.target)
            //We do not want form to be close if we click inside of form element
            if(ref.current && !ref.current.contains(e.target)){
                close()
            }
        }

        document.addEventListener("click",handleClick,true)
        return ()=>document.removeEventListener("click",handleClick,true)

    },[close])
    return ref
}

export default useOutsideClick