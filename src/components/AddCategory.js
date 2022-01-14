import React,{useState} from 'react'
import { PropTypes } from "prop-types";
export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(InputValue.trim().length>0){
            setCategories(cats=>[InputValue,...cats]);
            setInputValue('');
        }
    }
    AddCategory.propTypes={
        setCategories:PropTypes.func.isRequired
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'text'} value={InputValue} onChange={handleInputChange}></input>
            </form>
        </>
    )
}