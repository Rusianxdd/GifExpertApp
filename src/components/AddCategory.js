import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setcategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{

        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(inputValue.trim().length>2){
            //console.log('Submit hecho');
             setcategories(category => [inputValue, ...category]);
             setInputValue('');
        }
        
    }
    
    return (

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange }
                />
            </form>
  
   
     
    )
}

AddCategory.proTypes = {
    setcategories : PropTypes.func.isRequired
}

export default AddCategory;
