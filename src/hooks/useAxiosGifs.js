import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useAxiosGifs=(category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });


     useEffect( ()=>{
         getGifs(category).then(imgs=>{
             setTimeout(() => {
                 console.log(imgs);
                 setState({
                     data:imgs,
                     loading:false
                    })
            }, 1500);
            
         });
    },[category]);

    
    return state;
}