

import React, {useState, useEffect} from 'react'

const Categories = ({key,category, filterItem,value,setValue,}) => {

 
  return (
    <>
      <div className="btn-container">
    {
      category?.map((categories, index)=>{
      
        debugger;
        return(
          <div className="btn-container">
          <button type="button" 
          key={key}
           onClick={(e) => filterItem(categories,index)}
           className={`filter-btn ${index === value && 'active-btn'}`}
           >{categories}
         
          </button>
          </div>
          
        )
      })
          
    



}
</div>
    
    </>
  )
}

export default Categories